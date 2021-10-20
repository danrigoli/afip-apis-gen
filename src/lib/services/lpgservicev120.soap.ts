import debugModule from "debug";
import * as xml2js from "xml2js";
import { BaseError } from "../shared/error.server.class";
import { SoapService } from "./soap11";
import * as service from "./wsdl/LpgService/LpgEndPoint";

const debug = debugModule("afip-apis:lpgservicev120");

export class WsLpgv120 extends SoapService implements service.ILpgEndPointSoap {
    private baseSOAPAction = "http://serviciosjava.afip.gob.ar/wslpg/";
    public static get serviceId(): string {
        return "wslpg";
    }
    public static get produccionWSDL(): string {
        return "https://serviciosjava.afip.gob.ar/wslpg/LpgService?wsdl";
    }
    public static get testWSDL(): string {
        return "https://fwshomo.afip.gov.ar/wslpg/LpgService?wsdl";
    }


    /**
     * Permite verificar el funcionamiento del presente WS.
     * @param extraHeaders undefined
     * @returns Promise con el estado del servicio
     */
    dummy = (extraHeaders?: any): Promise<service.IdummyOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = `${this.baseSOAPAction}dummy`;

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soapenv:Envelope": {
                $: {
                    "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": <any>undefined,
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapenv:Envelope: %s", soapEnvelope);
        return new Promise<service.IdummyOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:dummyResp": service.IdummyOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r["ns2:dummyResp"]);
                })
                .catch(err => reject(err));
        });
    };
    /**
     * Mediante este método se podrá solicitar el código de operación electrónico (COE).
     * @param input token de autenticacion y datos de la liquidacion.
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con la autorizacion
     */
    liquidacionAutorizar = (input: service.IliquidacionAutorizarInput, options?: any, extraHeaders?: any): Promise<service.IliquidacionAutorizarOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = `${this.baseSOAPAction}liquidacionAutorizar`;

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soapenv:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FECAEAConsultar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IliquidacionAutorizarOutput>((resolve, reject) => {
            return this.invoke<{ "wsl:liquidacionResp": service.IliquidacionAutorizarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve (r["wsl:liquidacionResp"]);
                })
                .catch(err => reject(err));
        });
    };

    /** *
     * Permite consultar las provincias habilitadas a informar en una liquidación mediante este servicio.
     * @param input token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con el listado de las provincias
     */
    provinciasConsultar = (input: service.IprovinciasConsultarInput, options?: any, extraHeaders?: any): Promise<service.IprovinciasConsultarOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = `${this.baseSOAPAction}provinciasConsultar`;

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soapenv:Envelope": {
                $: {
                    "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                    "xmlns:wsl": "http://serviciosjava.afip.gob.ar/wslpg/"
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": {
                    "wsl:provinciasReq": input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapenv:Envelope: %s", soapEnvelope);
        return new Promise<service.IprovinciasConsultarOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:provinciasResp": service.IprovinciasConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve (r["ns2:provinciasResp"]);
                })
                .catch(err => reject(err));
        });
    };
    localidadXProvinciaConsultar = (input: service.IlocalidadXProvinciaConsultarInput, options?: any, extraHeaders?: any): Promise<service.IlocalidadXProvinciaConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    tipoOperacionXActividadConsultar = (input: service.ItipoOperacionXActividadConsultarInput, options?: any, extraHeaders?: any): Promise<service.ItipoOperacionXActividadConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    puertoConsultar = (input: service.IpuertoConsultarInput, options?: any, extraHeaders?: any): Promise<service.IpuertoConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    tipoActividadConsultar = (input: service.ItipoActividadConsultarInput, options?: any, extraHeaders?: any): Promise<service.ItipoActividadConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    tipoActividadRepresentadoConsultar = (input: service.ItipoActividadRepresentadoConsultarInput, options?: any, extraHeaders?: any): Promise<service.ItipoActividadRepresentadoConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    tipoCertificadoDepositoConsultar = (input: service.ItipoCertificadoDepositoConsultarInput, options?: any, extraHeaders?: any): Promise<service.ItipoCertificadoDepositoConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    tipoRetencionConsultar = (input: service.ItipoRetencionConsultarInput, options?: any, extraHeaders?: any): Promise<service.ItipoRetencionConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    tipoDeduccionConsultar = (input: service.ItipoDeduccionConsultarInput, options?: any, extraHeaders?: any): Promise<service.ItipoDeduccionConsultarOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = `${this.baseSOAPAction}tipoDeduccionConsultar`;

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soapenv:Envelope": {
                $: {
                    "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                    "xmlns:wsl": "http://serviciosjava.afip.gob.ar/wslpg/"
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": {
                    "wsl:tipoDeduccionReq": input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapenv:Envelope: %s", soapEnvelope);
        return new Promise<service.ItipoDeduccionConsultarOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:tipoDeduccionResp": service.ItipoDeduccionConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve (r["ns2:tipoDeduccionResp"]);
                })
                .catch(err => reject(err));
        });
    };
    /** *
     * Permite consultar los posibles tipos de granos a informar en una liquidación.
     * @param input token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con la lista de tipos de granos
     */
    tipoGranoConsultar = (input: service.ItipoGranoConsultarInput, options?: any, extraHeaders?: any): Promise<service.ItipoGranoConsultarOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = `${this.baseSOAPAction}tipoGranoConsultar`;

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soapenv:Envelope": {
                $: {
                    "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                    "xmlns:wsl": "http://serviciosjava.afip.gob.ar/wslpg/"
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": {
                    "wsl:tipoGranoReq": input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapenv:Envelope: %s", soapEnvelope);
        return new Promise<service.ItipoGranoConsultarOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:tipoGranoResp": service.ItipoGranoConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve (r["ns2:tipoGranoResp"]);
                })
                .catch(err => reject(err));
        });
    };
    codigoGradoReferenciaConsultar = (input: service.IcodigoGradoReferenciaConsultarInput, options?: any, extraHeaders?: any): Promise<service.IcodigoGradoReferenciaConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    codigoGradoEntregadoXTipoGranoConsultar = (input: service.IcodigoGradoEntregadoXTipoGranoConsultarInput, options?: any, extraHeaders?: any): Promise<service.IcodigoGradoEntregadoXTipoGranoConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    campaniasConsultar = (input: service.IcampaniasConsultarInput, options?: any, extraHeaders?: any): Promise<service.IcampaniasConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };

    /** *
     * Método que retorna una liquidación autorizada enviando como parámetro el código de operación electrónico asignado en la instancia de autorización.
     * @param input token de autenticacion, coe, pdf
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con la liquidacion autorizada
     */
    liquidacionXCoeConsultar = (input: service.IliquidacionXCoeConsultarInput, options?: any, extraHeaders?: any): Promise<service.IliquidacionXCoeConsultarOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = `${this.baseSOAPAction}liquidacionXCoeConsultar`;

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soapenv:Envelope": {
                $: {
                    "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                    "xmlns:wsl": "http://serviciosjava.afip.gob.ar/wslpg/"
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": {
                    "wsl:liqConsXCoeReq": input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapenv:Envelope: %s", soapEnvelope);
        return new Promise<service.IliquidacionXCoeConsultarOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:liqConsXCoeResp": service.IliquidacionXCoeConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve (r["ns2:liqConsXCoeResp"]);
                })
                .catch(err => reject(err));
        });
    };
    /** *
     * Método que retorna una liquidación autorizada, enviando como parámetros el punto de emisión y el número de orden asociado a la liquidación solicitada.
     * @param input token de autenticacion, punto de Emision y número de orden
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con la liquidacion autorizada
     */
    liquidacionXNroOrdenConsultar = (input: service.IliquidacionXNroOrdenConsultarInput, options?: any, extraHeaders?: any): Promise<service.IliquidacionXNroOrdenConsultarOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = `${this.baseSOAPAction}liquidacionXNroOrdenConsultar`;

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soapenv:Envelope": {
                $: {
                    "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                    "xmlns:wsl": "http://serviciosjava.afip.gob.ar/wslpg/"
                },
                "soapenv:Header": <any>undefined,
                "soapenv:Body": {
                    "wsl:liqConsXNroOrdenReq": input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapenv:Envelope: %s", soapEnvelope);
        return new Promise<service.IliquidacionXNroOrdenConsultarOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:liqConsXNroOrdenResp": service.IliquidacionXNroOrdenConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve (r["ns2:liqConsXNroOrdenResp"]);
                })
                .catch(err => reject(err));
        });
    };
    liquidacionUltimoNroOrdenConsultar = (input: service.IliquidacionUltimoNroOrdenConsultarInput, options?: any, extraHeaders?: any): Promise<service.IliquidacionUltimoNroOrdenConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    liquidacionAnular = (input: service.IliquidacionAnularInput, options?: any, extraHeaders?: any): Promise<service.IliquidacionAnularOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    liquidacionAjustarUnificado = (input: service.IliquidacionAjustarUnificadoInput, options?: any, extraHeaders?: any): Promise<service.IliquidacionAjustarUnificadoOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    liquidacionAjustarContrato = (input: service.IliquidacionAjustarContratoInput, options?: any, extraHeaders?: any): Promise<service.IliquidacionAjustarContratoOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    ajusteXCoeConsultar = (input: service.IajusteXCoeConsultarInput, options?: any, extraHeaders?: any): Promise<service.IajusteXCoeConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    asociarLiquidacionAContrato = (input: service.IasociarLiquidacionAContratoInput, options?: any, extraHeaders?: any): Promise<service.IasociarLiquidacionAContratoOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    liquidacionPorContratoConsultar = (input: service.IliquidacionPorContratoConsultarInput, options?: any, extraHeaders?: any): Promise<service.IliquidacionPorContratoConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    ajustePorContratoConsultar = (input: service.IajustePorContratoConsultarInput, options?: any, extraHeaders?: any): Promise<service.IajustePorContratoConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    ajusteXNroOrdenConsultar = (input: service.IajusteXNroOrdenConsultarInput, options?: any, extraHeaders?: any): Promise<service.IajusteXNroOrdenConsultarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lsgAutorizar = (input: service.IlsgAutorizarInput, options?: any, extraHeaders?: any): Promise<service.IlsgAutorizarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lsgConsultarXCoe = (input: service.IlsgConsultarXCoeInput, options?: any, extraHeaders?: any): Promise<service.IlsgConsultarXCoeOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lsgConsultarXNroOrden = (input: service.IlsgConsultarXNroOrdenInput, options?: any, extraHeaders?: any): Promise<service.IlsgConsultarXNroOrdenOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lsgConsultarUltimoNroOrden = (input: service.IlsgConsultarUltimoNroOrdenInput, options?: any, extraHeaders?: any): Promise<service.IlsgConsultarUltimoNroOrdenOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lsgAnular = (input: service.IlsgAnularInput, options?: any, extraHeaders?: any): Promise<service.IlsgAnularOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lsgAjustarXCoe = (input: service.IlsgAjustarXCoeInput, options?: any, extraHeaders?: any): Promise<service.IlsgAjustarXCoeOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lsgAjustarXContrato = (input: service.IlsgAjustarXContratoInput, options?: any, extraHeaders?: any): Promise<service.IlsgAjustarXContratoOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lsgAsociarAContrato = (input: service.IlsgAsociarAContratoInput, options?: any, extraHeaders?: any): Promise<service.IlsgAsociarAContratoOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lsgConsultarXContrato = (input: service.IlsgConsultarXContratoInput, options?: any, extraHeaders?: any): Promise<service.IlsgConsultarXContratoOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    cgAutorizar = (input: service.IcgAutorizarInput, options?: any, extraHeaders?: any): Promise<service.IcgAutorizarOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    cgBuscarCtg = (input: service.IcgBuscarCtgInput, options?: any, extraHeaders?: any): Promise<service.IcgBuscarCtgOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    cgBuscarCertConSaldoDisponible = (input: service.IcgBuscarCertConSaldoDisponibleInput, options?: any, extraHeaders?: any): Promise<service.IcgBuscarCertConSaldoDisponibleOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    cgConsultarUltimoNroOrden = (input: service.IcgConsultarUltimoNroOrdenInput, options?: any, extraHeaders?: any): Promise<service.IcgConsultarUltimoNroOrdenOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    cgSolicitarAnulacion = (input: service.IcgSolicitarAnulacionInput, options?: any, extraHeaders?: any): Promise<service.IcgSolicitarAnulacionOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    cgConfirmarAnulacion = (input: service.IcgConfirmarAnulacionInput, options?: any, extraHeaders?: any): Promise<service.IcgConfirmarAnulacionOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    cgConsultarXCoe = (input: service.IcgConsultarXCoeInput, options?: any, extraHeaders?: any): Promise<service.IcgConsultarXCoeOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    cgConsultarXNroOrden = (input: service.IcgConsultarXNroOrdenInput, options?: any, extraHeaders?: any): Promise<service.IcgConsultarXNroOrdenOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    cgInformarCalidad = (input: service.IcgInformarCalidadInput, options?: any, extraHeaders?: any): Promise<service.IcgInformarCalidadOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lpgAutorizarAnticipo = (input: service.IlpgAutorizarAnticipoInput, options?: any, extraHeaders?: any): Promise<service.IlpgAutorizarAnticipoOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };
    lpgCancelarAnticipo = (input: service.IlpgCancelarAnticipoInput, options?: any, extraHeaders?: any): Promise<service.IlpgCancelarAnticipoOutput> => {
        return Promise.reject(new BaseError(500, "not-implemented", "No implementado", undefined));
    };


    private emptyResponse(): Promise<any> {
        return Promise.reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
    }
}