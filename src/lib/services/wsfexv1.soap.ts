import * as xml2js from "xml2js";
import { BaseError } from "../shared/error.server.class";
import { SoapService } from "./soap12";
import * as service from "./wsdl/wsfexv1Service/ServiceSoap12";

const xmlns = "http://ar.gov.afip.dif.fexv1/";

export class Wsfexv1 extends SoapService implements service.IServiceSoap12Soap {
    public static get serviceId(): string {
        return "wsfex";
    }
    public static get produccionWSDL(): string {
        return "https://servicios1.afip.gov.ar/wsfexv1/service.asmx?WSDL";
    }
    public static get testWSDL(): string {
        return "https://wswhomo.afip.gov.ar/wsfexv1/service.asmx?WSDL";
    }

    FEXAuthorize = (input: service.IFEXAuthorizeInput, options?: any, extraHeaders?: any): Promise<service.IFEXAuthorizeOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXAuthorize";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXAuthorize: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXAuthorizeOutput>((resolve, reject) => {
            return this.invoke<{ FEXAuthorizeResponse: service.IFEXAuthorizeOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXAuthorizeResponse);
                })
                .catch(err => reject(err));
        });
    };
    /**
     * Verificador de existencia de Permiso/País de destinación en bases de datos aduaneras
     */
    FEXCheck_Permiso = (input: service.IFEXCheck_PermisoInput, options?: any, extraHeaders?: any): Promise<service.IFEXCheck_PermisoOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXCheck_Permiso";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXCheck_Permiso: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXCheck_PermisoOutput>((resolve, reject) => {
            return this.invoke<{ FEXCheck_PermisoResponse: service.IFEXCheck_PermisoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXCheck_PermisoResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Método Dummy para verificación de funcionamiento de infraestructura
     */
    FEXDummy = (options?: any, extraHeaders?: any): Promise<service.IFEXDummyOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXDummy";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns }
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXDummyOutput>((resolve, reject) => {
            return this.invoke<{ FEXDummyResponse: service.IFEXDummyOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXDummyResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de comprobante
     * @param input Autorizacion y datos del comprobante
     */
    FEXGetCMP = (input: service.IFEXGetCMPInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetCMPOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetCMP";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetCMP: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetCMPOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetCMPResponse: service.IFEXGetCMPOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetCMPResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el ultimos comprobante autorizado
     * @param input Authorizacion y datos del comprobante. En este método los datos del comprobante estan incluidos dentro de Auth
     */

    FEXGetLast_CMP = (input: service.IFEXGetLast_CMPInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetLast_CMPOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetLast_CMP";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetLast_CMP: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetLast_CMPOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetLast_CMPResponse: service.IFEXGetLast_CMPOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetLast_CMPResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el ultimo ID y su fecha
     * @param input Authorizacion
     */
    FEXGetLast_ID = (input: service.IFEXGetLast_IDInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetLast_IDOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetLast_ID";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetLast_ID: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetLast_IDOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetLast_IDResponse: service.IFEXGetLast_IDOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetLast_IDResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado de los tipos de comprobante y su codigo utilizables en servicio de autorizacion
     * @param input Authorizacion
     */
    FEXGetPARAM_Cbte_Tipo = (input: service.IFEXGetPARAM_Cbte_TipoInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_Cbte_TipoOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_Cbte_Tipo";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_Cbte_Tipo: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_Cbte_TipoOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_Cbte_TipoResponse: service.IFEXGetPARAM_Cbte_TipoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_Cbte_TipoResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera la cotizacion de la moneda consultada y su fecha
     * @param input Authorizacion y ID de la moneda
     */
    FEXGetPARAM_Ctz = (input: service.IFEXGetPARAM_CtzInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_CtzOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_Ctz";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_Ctz: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_CtzOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_CtzResponse: service.IFEXGetPARAM_CtzOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_CtzResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado de las cuits de los paises de destinacion
     * @param input Authorizacion
     */
    FEXGetPARAM_DST_CUIT = (input: service.IFEXGetPARAM_DST_CUITInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_DST_CUITOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_DST_CUIT";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_DST_CUIT: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_DST_CUITOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_DST_CUITResponse: service.IFEXGetPARAM_DST_CUITOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_DST_CUITResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado de paises
     * @param input Authorizacion
     */
    FEXGetPARAM_DST_pais = (input: service.IFEXGetPARAM_DST_paisInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_DST_paisOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_DST_pais";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_DST_pais: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_DST_paisOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_DST_paisResponse: service.IFEXGetPARAM_DST_paisOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_DST_paisResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado de los idiomas y sus codigos utilizables en servicio de autorizacion
     * @param input Authorizacion
     */
    FEXGetPARAM_Idiomas = (input: service.IFEXGetPARAM_IdiomasInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_IdiomasOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_Idiomas";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_Idiomas: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_IdiomasOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_IdiomasResponse: service.IFEXGetPARAM_IdiomasOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_IdiomasResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado Incoterms utilizables en servicio de autorizacion
     * @param input Authorizacion
     */
    FEXGetPARAM_Incoterms = (input: service.IFEXGetPARAM_IncotermsInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_IncotermsOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_Incoterms";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_Incoterms: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_IncotermsOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_IncotermsResponse: service.IFEXGetPARAM_IncotermsOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_IncotermsResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado de monedas y su codigo utilizables en servicio de autorizacion
     * @param input Authorizacion
     */
    FEXGetPARAM_MON = (input: service.IFEXGetPARAM_MONInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_MONOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_MON";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_MON: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_MONOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_MONResponse: service.IFEXGetPARAM_MONOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_MONResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado de monedas que tengan cotizacion de ADUANA a una fecha determinada, utilizables en el proceso de autorizacion de comprobantes de servicios
     * @param input Authorizacion y fecha de la cotizacion
     */
    FEXGetPARAM_MON_CON_COTIZACION = (input: service.IFEXGetPARAM_MON_CON_COTIZACIONInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_MON_CON_COTIZACIONOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_MON_CON_COTIZACION";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_MON_CON_COTIZACION: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_MON_CON_COTIZACIONOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_MON_CON_COTIZACIONResponse: service.IFEXGetPARAM_MON_CON_COTIZACIONOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_MON_CON_COTIZACIONResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado de identificadores para los campos Opcionales
     * @param input Authorizacion
     */
    FEXGetPARAM_Opcionales = (input: service.IFEXGetPARAM_OpcionalesInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_OpcionalesOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_Opcionales";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_Opcionales: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_OpcionalesOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_OpcionalesResponse: service.IFEXGetPARAM_OpcionalesOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_OpcionalesResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado de los puntos de venta registrados para Factura electronica de exportacion - WS y su estado
     * @param input Authorizacion
     */
    FEXGetPARAM_PtoVenta = (input: service.IFEXGetPARAM_PtoVentaInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_PtoVentaOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_PtoVenta";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_PtoVenta: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_PtoVentaOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_PtoVentaResponse: service.IFEXGetPARAM_PtoVentaOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_PtoVentaResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado de los tipos de exportacion y sus codigo utilizables en servicio de autorizacion
     * @param input Authorizacion
     */
    FEXGetPARAM_Tipo_Expo = (input: service.IFEXGetPARAM_Tipo_ExpoInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_Tipo_ExpoOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_Tipo_Expo";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_Tipo_Expo: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_Tipo_ExpoOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_Tipo_ExpoResponse: service.IFEXGetPARAM_Tipo_ExpoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_Tipo_ExpoResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recupera el listado de las unidades de medida y su codigo utilizables en servicio de autorizacion
     * @param input Authorizacion
     */
    FEXGetPARAM_UMed = (input: service.IFEXGetPARAM_UMedInput, options?: any, extraHeaders?: any): Promise<service.IFEXGetPARAM_UMedOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.fexv1/FEXGetPARAM_UMed";
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: xmlns },
                    FEXGetPARAM_UMed: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEXGetPARAM_UMedOutput>((resolve, reject) => {
            return this.invoke<{ FEXGetPARAM_UMedResponse: service.IFEXGetPARAM_UMedOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return this.emptyResponse();
                    }
                    return resolve(r.FEXGetPARAM_UMedResponse);
                })
                .catch(err => reject(err));
        });

    };

    private emptyResponse(): Promise<any> {
        return Promise.reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
    }
}
