import * as xml2js from "xml2js";
import { BaseError } from "../shared/error.server.class";
import { SoapFault, SoapFaultError, SoapService } from "./soap11";

import debugModule from "debug";
const debug = debugModule("afip-apis:personaA10");

import * as service from "./wsdl/PersonaServiceA10/PersonaServiceA10Port";

export class PersonaServiceA10 extends SoapService implements service.IPersonaServiceA10PortSoap {
    public static get serviceId(): string {
        return "ws_sr_padron_a10";
    }
    public static get produccionWSDL(): string {
        return "https://aws.afip.gov.ar/sr-padron/webservices/personaServiceA10?WSDL";
    }
    public static get testWSDL(): string {
        return "https://awshomo.afip.gov.ar/sr-padron/webservices/personaServiceA10?WSDL";
    }

    constructor(wsdlUrl?: string) {
        super(wsdlUrl);
        console.warn("ws_sr_padron_a10 fue eliminado de producción");
    }

    getPersona = (input: service.IgetPersonaInput, options?: any, extraHeaders?: any): Promise<service.IgetPersonaOutput> => {
        debug("getPersona;");
        extraHeaders = extraHeaders || {};
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soapenv:Envelope": {
                $: {
                    "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                    "xmlns:a10": "http://a10.soap.ws.server.puc.sr/"
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": {
                    "a10:getPersona": input
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
                    "xmlns:a10": "http://a10.soap.ws.server.puc.sr/"
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": {
                    "a10:dummy": <any>undefined,
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
}