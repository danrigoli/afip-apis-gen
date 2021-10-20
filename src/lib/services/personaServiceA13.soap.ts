import * as xml2js from "xml2js";
import { BaseError } from "../shared/error.server.class";
import { SoapFault, SoapFaultError, SoapService } from "./soap11";

import debugModule from "debug";
const debug = debugModule("afip-apis:personaA13");

const envelope = {
    "soapenv:Envelope": {
        $: {
            "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
            "xmlns:a13": "http://a13.soap.ws.server.puc.sr/"
        },
        "soapenv:Header": <any>undefined,
        "soapenv:Body": <any>undefined,
    }
};

import * as service from "./wsdl/PersonaServiceA13/PersonaServiceA13Port";

export { PersonaServiceA13PortTypes } from "./wsdl/PersonaServiceA13/PersonaServiceA13Port";

export class PersonaServiceA13 extends SoapService implements service.IPersonaServiceA13PortSoap {
    public static get serviceId(): string {
        return "ws_sr_padron_a13";
    }
    public static get produccionWSDL(): string {
        return "https://aws.afip.gov.ar/sr-padron/webservices/personaServiceA13?WSDL";
    }
    public static get testWSDL(): string {
        return "https://awshomo.afip.gov.ar/sr-padron/webservices/personaServiceA13?WSDL";
    }

    dummy = (input: service.IdummyInput, options?: any, extraHeaders?: any): Promise<service.IdummyOutput> => {
        extraHeaders = extraHeaders || {};
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "a13:dummy": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IdummyOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:dummyResponse": service.IdummyOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:dummyResponse"]))
                .catch(err => {
                    return reject(err);
                });
        });
    };

    getIdPersonaListByDocumento = (input: service.IgetIdPersonaListByDocumentoInput, options?: any, extraHeaders?: any): Promise<service.IgetIdPersonaListByDocumentoOutput> => {
        extraHeaders = extraHeaders || {};
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "a13:getIdPersonaListByDocumento": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("getIdPersonaListByDocumento;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IgetIdPersonaListByDocumentoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:getIdPersonaListByDocumentoResponse": service.IgetIdPersonaListByDocumentoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve (r["ns2:getIdPersonaListByDocumentoResponse"]);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    };

    getPersona = (input: service.IgetPersonaInput, options?: any, extraHeaders?: any): Promise<service.IgetPersonaOutput> => {
        extraHeaders = extraHeaders || {};
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "a13:getPersona": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("getPersona;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IgetPersonaOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:getPersonaResponse": service.IgetPersonaOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve (r["ns2:getPersonaResponse"]);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    };

}