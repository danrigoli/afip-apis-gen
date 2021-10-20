import debugModule from "debug";
import * as xml2js from "xml2js";
import { SoapService } from "./soap11";
import * as service from "./wsdl/PersonaServiceA5/PersonaServiceA5Port";
import { BaseError } from "../shared/error.server.class";

const debug = debugModule("afip-apis:personaA5");

export { PersonaServiceA5PortTypes } from "./wsdl/PersonaServiceA5/PersonaServiceA5Port";

export class PersonaServiceA5 extends SoapService implements service.IPersonaServiceA5PortSoap {
    public static get serviceId(): string {
        return "ws_sr_constancia_inscripcion";
    }
    public static get produccionWSDL(): string {
        return "https://aws.afip.gov.ar/sr-padron/webservices/personaServiceA5?WSDL";
    }
    public static get testWSDL(): string {
        return "https://awshomo.afip.gov.ar/sr-padron/webservices/personaServiceA5?WSDL";
    }
    getPersona = (input: service.IgetPersonaInput, options?: any, extraHeaders?: any): Promise<service.IgetPersonaOutput> => {
        debug("getPersona;");
        extraHeaders = extraHeaders || {};
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soapenv:Envelope": {
                $: {
                    "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                    "xmlns:a5": "http://a5.soap.ws.server.puc.sr/"
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": {
                    "a5:getPersona_v2": input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("getPersona;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IgetPersonaOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:getPersonaResponse": service.IgetPersonaOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:getPersonaResponse"]))
                .catch(err => reject(err));
        });
    };
    dummy = (input: service.IdummyInput, options?: any, extraHeaders?: any): Promise<service.IdummyOutput> => {
        debug("dummy;");
        extraHeaders = extraHeaders || {};
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soapenv:Envelope": {
                $: {
                    "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                    "xmlns:a5": "http://a5.soap.ws.server.puc.sr/"
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": {
                    "a5:dummy": <any>undefined,
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IdummyOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:dummyResponse": service.IdummyOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:dummyResponse"]))
                .catch(err => reject(err));
        });
    };
    private emptyResponse(): Promise<any> {
        return Promise.reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
    }
}