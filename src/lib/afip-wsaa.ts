/* eslint-disable @typescript-eslint/ban-types */
import debugModule from "debug";
import * as fs from "fs";
import moment from "moment";
import * as xml2js from "xml2js";
import { ILoginTicketResponse, LoginCmsSoap } from "./services/wsaa.soap";
import { BaseError } from "./shared/error.server.class";
import * as forge from "node-forge";
const debug = debugModule("afip-apis:wsaa");

// Duracion predeterminada del ticket en minutos
const defaultDeltaNow = 2;

export class LoginTicket {
    private uniqueId = 0;
    private _ticket!: ILoginTicketResponse;
    public get ticket(): ILoginTicketResponse {
        return this._ticket;
    }
    private static instance: LoginTicket;
    public static getInstance(): LoginTicket {
        if (!this.instance) {
            this.instance = new LoginTicket();
        }
        return this.instance;
    }

    /**
     * Generación del Ticket de Requerimiento de Acceso (TRA)
     * @param idServicio  Identificación del WSN para el cual se solicita el TA
     */
    private generateTRA(idServicio: string, duracion?: number): string {
        this.uniqueId += 1;
        const deltaNow = (duracion && !isNaN(+duracion)) ? duracion : defaultDeltaNow;
        debug("generateTRA; uniqueId:%s", this.uniqueId);
        const now = moment();
        const ticketRequest: Object = {
            loginTicketRequest: {
                header: {
                    uniqueId: this.uniqueId,
                    generationTime: moment(now).add(-5, "m").toISOString(false),
                    expirationTime: moment(now).add(+deltaNow, "m").toISOString(false)
                },
                service: idServicio
            }
        };
        debug("generateTRA; ticketRequest:%s", JSON.stringify(ticketRequest));
        const builder: xml2js.Builder = new xml2js.Builder();
        const xmlTicket: string = builder.buildObject(ticketRequest);
        return xmlTicket;
    }

    /**
     * Genera el CMS y lo devuelve en base64
     * @param data ticket a firmar
     */
    private generateCMS(data: string, certificateFile: string, keyFile: string): string {
        // firma del ticket
        const certificateBuff = fs.readFileSync(certificateFile);
        const keyBuff = fs.readFileSync(keyFile);
        const pki: any = forge.pki;
        const certificate: any = pki.certificateFromPem(certificateBuff.toString());

        const p7: any = forge.pkcs7.createSignedData();
        p7.content = forge.util.createBuffer(data, "utf8");
        p7.addCertificate(certificate);
        p7.addSigner({
            key: forge.pki.privateKeyFromPem(keyBuff.toString()),
            certificate: certificate,
            digestAlgorithm: forge.pki.oids.sha256,
            authenticatedAttributes: [{
                type: forge.pki.oids.contentType,
                value: forge.pki.oids.data
            }, {
                type: forge.pki.oids.messageDigest
                // value will be auto-populated at signing time
            }, {
                type: forge.pki.oids.signingTime,
                // value can also be auto-populated at signing time
                value: new Date()
            }]
        });
        p7.sign();
        const asn1 = p7.toAsn1();
        const p12Der = forge.asn1.toDer(asn1).getBytes();
        const p12b64 = forge.util.encode64(p12Der);
        return p12b64;
    }

    /**
     * Autentica contra el webservice de aa de afip
     * @param idServicio id del servicio
     * @param wsaaUrl url del wsaa
     * @param certificateFile path al certificado
     * @param keyFile path a la clave privada
     * @param duracion duracion del ticket en minutos a partir de now
     */
    public wsaaLogin = (idServicio: string, wsaaUrl: string, certificateFile: string, keyFile: string, duracion?: number): Promise<ILoginTicketResponse> => {
        const pp = new Promise<ILoginTicketResponse>((resolve, reject) => {
            let cms = "";
            try {
                // creacion del ticket
                const xmlTra: string = this.generateTRA(idServicio, duracion);
                debug("wsaaLogin; tra:%s", xmlTra);
                cms = this.generateCMS(xmlTra, certificateFile, keyFile);
                debug("wsaaLogin; cms: %s", cms);
            } catch (err) {
                return reject(new BaseError(500, "certificate-files-error", "Ocurrió un error con el certificado", err));
            }
            const login = new LoginCmsSoap(wsaaUrl);
            return login.loginCms({ in0: cms })
                .then(response => {
                    debug("wsaaLogin;response:%s", JSON.stringify(response));
                    const parser = new xml2js.Parser({
                        explicitRoot: false, explicitArray: false, ignoreAttrs: true
                    });
                    return parser.parseString(response.loginCmsReturn, (err: any, result: any) => {
                        if (err) {
                            return reject(new BaseError(500, "xml-parser-error", "Error al procesar datos xml", err));
                        }
                        this._ticket = <ILoginTicketResponse>result;
                        return resolve(this._ticket);
                    });
                })
                .catch(err => reject(err));
        });
        return pp;
    };
}