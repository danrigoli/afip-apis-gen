import { CacheLogin } from "./cache-login";
import { Wsfev1 } from "../afip-apis";
import * as path from "path";
import moment from "moment";
import * as fs from "fs";

const DEFAULT_CERTIFICATE: string = path.resolve("./private/certificate/certificate.crt");
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/TEST/09.2021/afip-test.key";
const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";

const serviceURL = "https://wswhomo.afip.gov.ar/wsfev1/service.asmx";


const cacheLogin = CacheLogin.Instance;
cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;

const fecha = moment(new Date()).format("YYYYMMDD");
// const periodo = +moment(new Date()).format("YYYYMM");

// http://www.afip.gob.ar/facturadecreditoelectronica/documentos/manual-desarrollador-COMPG-v2-13-Beta2.pdf
// Pagina 107
/*
const feCAEARegInfReq = {
    FeCabReq: {
        CantReg: 1,
        PtoVta: 9800,
        CbteTipo: 1
    },
    FeDetReq: {
        FECAEADetRequest: [{
            Concepto: 1,
            DocTipo: 80,
            DocNro: 30000000007,
            CbteDesde: 33,
            CbteHasta: 33,
            CbteFch: fecha,
            ImpTotal: 100.00,
            ImpTotConc: 100.00,
            ImpNeto: 0,
            ImpOpEx: 0.00,
            ImpIva: 0,
            ImpTrib: 0,
            MonId: "PES",
            MonCotiz: 1,
            CAEA: "21064126523746",
        }]
    }
};
*/

// http://www.afip.gob.ar/facturadecreditoelectronica/documentos/manual-desarrollador-COMPG-v2-13-Beta2.pdf
// Pag 46
const comprobante = {
    FeCabReq: {
        CantReg: 1,
        PtoVta: 1,
        CbteTipo: 6 // Factura "B"
    },
    FeDetReq: {
        FECAEDetRequest: [{
            Concepto: 1, // Productos
            DocTipo: 80,
            DocNro: 27223856964,
            CbteDesde: 1,
            CbteHasta: 1,
            CbteFch: fecha,
            ImpTotal: 184.05,
            ImpTotConc: 0,
            ImpNeto: 150,
            ImpOpEx: 0,
            ImpTrib: 7.8,
            ImpIVA: 26.25,
            FchServDesde: "",
            FchServHasta: "",
            FchVtoPago: "",
            MonId: "PES",
            MonCotiz: 1,
            Tributos: {
                Tributo: [
                    {
                        Id: 99,
                        Desc: "Impuesto Municipal Matanza",
                        BaseImp: 150,
                        Alic: 5.2,
                        Importe: 7.8
                    }
                ]
            },
            Iva: {
                AlicIva: [
                    {
                        Id: 5,
                        BaseImp: 100,
                        Importe: 21
                    },
                    {
                        Id: 4,
                        BaseImp: 50,
                        Importe: 5.25
                    }]
            },
        }]
    }
};

let wsfev1: Wsfev1;
describe("Wsfev1", () => {
    it("shoul create", () => {
        wsfev1 = new Wsfev1(Wsfev1.testWSDL);
        expect(wsfev1.url).toEqual(serviceURL);
    });
    it("should get service status", () => {
        wsfev1.FEDummy()
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("FEDummyResult");
                if (fs.existsSync(DEFAULT_CERTIFICATE)) {
                    return cacheLogin.getTicket(Wsfev1.serviceId)
                        .then(ticket => {
                            expect(ticket).toBeDefined;
                            expect(ticket).toHaveProperty("header");
                            expect(ticket).toHaveProperty("credentials");
                            const auth = {
                                Token: ticket.credentials.token,
                                Sign: ticket.credentials.sign,
                                Cuit: 20220536999
                            };
                            return wsfev1.FECompUltimoAutorizado({
                                Auth: auth,
                                PtoVta: comprobante.FeCabReq.PtoVta,
                                CbteTipo: comprobante.FeCabReq.CbteTipo
                            })
                                .then(r => {
                                    expect(r).toBeDefined;
                                    expect(r).toHaveProperty("FECompUltimoAutorizadoResult");
                                    expect(r.FECompUltimoAutorizadoResult).toHaveProperty("CbteNro");
                                    expect(r.FECompUltimoAutorizadoResult.CbteNro).toBe("number");
                                    comprobante.FeDetReq.FECAEDetRequest[0].CbteDesde = +r.FECompUltimoAutorizadoResult.CbteNro + 1;
                                    comprobante.FeDetReq.FECAEDetRequest[0].CbteHasta = +comprobante.FeDetReq.FECAEDetRequest[0].CbteDesde;
                                    return wsfev1.FECAESolicitar({ Auth: auth, FeCAEReq: comprobante });
                                })
                                .then(r => {
                                    expect(r).toBeDefined;
                                    expect(r).toHaveProperty("FECAEASolicitarResult");
                                    expect(r.FECAESolicitarResult.FeDetResp).toHaveProperty("FECAEDetResponse");
                                    expect(r.FECAESolicitarResult.FeDetResp.FECAEDetResponse).toHaveProperty("CAE");
                                });
                        });

                } else {
                    return Promise.resolve();
                }
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
});