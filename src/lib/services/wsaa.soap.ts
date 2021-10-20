import { BaseError } from "../shared/error.server.class";
import { SoapService } from "./soap11";
import { IloginCmsInput, IloginCmsOutput, ILoginCmsSoap } from "./wsdl/LoginCMSService/LoginCms";

import debugModule from "debug";
const debug = debugModule("afip-apis:wsaa");

export { ILoginCmsSoap, IloginCmsInput, IloginCmsOutput };

function tagNameProcessor(name: string): string {
    return name.substring(0, 5).toLocaleLowerCase() === "soap:" ? name.substring(5, name.length).toLocaleLowerCase() : name;
}

const defaultParserOptions = {
    explicitRoot: false, explicitArray: false, ignoreAttrs: true,
    tagNameProcessors: [tagNameProcessor],
};

export interface ILoginTicketResponse {
    header:
    {
        source: string;
        destination: string;
        uniqueId: string;
        generationTime: Date;
        expirationTime: Date;
    };
    credentials:
    {
        token: string;
        sign: string;
    };
}

export class LoginCmsSoap extends SoapService implements ILoginCmsSoap {
    public static get produccionWSDL(): string {
        return "https://wsaa.afip.gov.ar/ws/services/LoginCms?WSDL";
    }
    public static get testWSDL(): string {
        return "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";
    }

    /**
     * Devuelve el login token en xml
     */
    public loginCms = (input: IloginCmsInput, options?: any, extraHeaders?: any): Promise<IloginCmsOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = this.url;
        extraHeaders["Content-Type"] = "application/xml";

        // TODO: mejorar los errores
        if (!this.url) {
            return Promise.reject(new BaseError(409, "url-is-undefined", "La url no puede ser nula", undefined));
        }
        const soapEnvelope = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:wsaa="http://wsaa.view.sua.dvadac.desein.afip.gov">
        <soapenv:Header/>
        <soapenv:Body>
          <wsaa:loginCms>
            <wsaa:in0> ${input.in0}</wsaa:in0>
          </wsaa:loginCms>
        </soapenv:Body>
        </soapenv:Envelope>`;
        return new Promise<IloginCmsOutput>((resolve, reject) => {
            return this.invoke<{ loginCmsResponse: IloginCmsOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve(r.loginCmsResponse);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    };
}