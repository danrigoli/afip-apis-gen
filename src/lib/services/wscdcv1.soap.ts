import * as xml2js from "xml2js";
import { SoapService } from "./soap12";
import * as service from "./wsdl/wscdcv1Service/ServiceSoap12";

import debugModule from "debug";
const debug = debugModule("afip-apis:wscdcv1");

export class Wscdcv1 extends SoapService implements service.IServiceSoap12Soap {
    public static get serviceId(): string {
        return "wscdc";
    }
    public static get produccionWSDL(): string {
        return "https://servicios1.afip.gov.ar/WSCDC/service.asmx?WSDL";
    }
    public static get testWSDL(): string {
        return "https://wswhomo.afip.gov.ar/WSCDC/service.asmx?WSDL";
    }

    /**
     * Recuperador de modalidades de autorización de comprobantes
     * Este método permite obtener las distintas modalidades de autorización que se encuentran habilitadas a consultar.
     * @param input token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con las modalidades de autorización
     */
    ComprobantesModalidadConsultar(input: service.IComprobantesModalidadConsultarInput, options?: any, extraHeaders?: any): Promise<service.IComprobantesModalidadConsultarOutput> {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://servicios1.afip.gob.ar/wscdc/ComprobantesModalidadConsultar";
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://servicios1.afip.gob.ar/wscdc/" },
                    ComprobantesModalidadConsultar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IComprobantesModalidadConsultarOutput>((resolve, reject) => {
            return this.invoke<{ ComprobantesModalidadConsultarResponse: service.IComprobantesModalidadConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve(r.ComprobantesModalidadConsultarResponse);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }

    /**
     * Recuperador de valores referenciales de códigos de Tipos de comprobante
     * Este método permite consultar los tipos de comprobantes habilitados en este WS.
     * @param input Token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los tipos de comprobante habilitados
     */
    ComprobantesTipoConsultar(input: service.IComprobantesTipoConsultarInput, options?: any, extraHeaders?: any): Promise<service.IComprobantesTipoConsultarOutput> {

        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://servicios1.afip.gob.ar/wscdc/ComprobantesTipoConsultar";
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://servicios1.afip.gob.ar/wscdc/" },
                    ComprobantesTipoConsultar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IComprobantesTipoConsultarOutput>((resolve, reject) => {
            return this.invoke<{ ComprobantesTipoConsultarResponse: service.IComprobantesTipoConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve(r.ComprobantesTipoConsultarResponse);
                })
                .catch(err => {
                    return reject(err);
                });
        });

    }

    /**
     * Recuperador de valores referenciales de códigos de Tipos de Documentos
     * Este método retorna el universo de tipos de documentos disponibles en el presente WS.
     * @param input Token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los tipos de documentos disponibles
     */
    DocumentosTipoConsultar(input: service.IDocumentosTipoConsultarInput, options?: any, extraHeaders?: any): Promise<service.IDocumentosTipoConsultarOutput> {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://servicios1.afip.gob.ar/wscdc/DocumentosTipoConsultar";
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://servicios1.afip.gob.ar/wscdc/" },
                    DocumentosTipoConsultar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IDocumentosTipoConsultarOutput>((resolve, reject) => {
            return this.invoke<{ DocumentosTipoConsultarResponse: service.IDocumentosTipoConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve(r.DocumentosTipoConsultarResponse);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }

    /**
     * Recuperador de valores referenciales de códigos de Tipos de datos Opcionales
     * Este método permite consultar los códigos y descripciones de los tipos de datos Opcionales que se
     * encuentran habilitados para ser usados en el WS.
     * @param input Token de authenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los valores disponibles
     */
    OpcionalesTipoConsultar(input: service.IOpcionalesTipoConsultarInput, options?: any, extraHeaders?: any): Promise<service.IOpcionalesTipoConsultarOutput> {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://servicios1.afip.gob.ar/wscdc/OpcionalesTipoConsultar";
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://servicios1.afip.gob.ar/wscdc/" },
                    OpcionalesTipoConsultar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IOpcionalesTipoConsultarOutput>((resolve, reject) => {
            return this.invoke<{ OpcionalesTipoConsultarResponse: service.IOpcionalesTipoConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve(r.OpcionalesTipoConsultarResponse);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }

    /**
     * Método de Constatación de Comprobantes (ComprobanteConstatar)
     * @param input datos de autenticacion y comprobante a constatar
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Una Promise con los resultados de la invocacion del metodo
     */
    ComprobanteConstatar(input: service.IComprobanteConstatarInput, options?: any, extraHeaders?: any): Promise<service.IComprobanteConstatarOutput> {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://servicios1.afip.gob.ar/wscdc/ComprobanteConstatar";
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://servicios1.afip.gob.ar/wscdc/" },
                    ComprobanteConstatar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IComprobanteConstatarOutput>((resolve, reject) => {
            return this.invoke<{ ComprobanteConstatarResponse: service.IComprobanteConstatarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve(r.ComprobanteConstatarResponse);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }

    /**
     * Método Dummy para verificación de funcionamiento de infraestructura
     * @param input opcional, no requiere authenticacin.
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Una Promise con el estado de los servicios.
     */
    ComprobanteDummy(input?: service.IComprobanteDummyInput, options?: any, extraHeaders?: any): Promise<service.IComprobanteDummyOutput> {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://servicios1.afip.gob.ar/wscdc/ComprobanteDummy";
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://servicios1.afip.gob.ar/wscdc/" },
                    ComprobanteDummy: input || {}
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IComprobanteDummyOutput>((resolve, reject) => {
            return this.invoke<{ "ComprobanteDummyResponse": service.IComprobanteDummyOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve(r.ComprobanteDummyResponse);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
}