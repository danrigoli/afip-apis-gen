import * as xml2js from "xml2js";
import { BaseError } from "../shared/error.server.class";
import { SoapService } from "./soap12";
import * as service from "./wsdl/wsfe1Service/ServiceSoap12";

import debugModule from "debug";
const debug = debugModule("afip-apis:wsfev1");

export { ServiceSoap12Types as Wsfev1Types } from "./wsdl/wsfe1Service/ServiceSoap12";

export class Wsfev1 extends SoapService implements service.IServiceSoap12Soap {
    public static get serviceId(): string {
        return "wsfe";
    }
    public static get produccionWSDL(): string {
        return "https://servicios1.afip.gov.ar/wsfev1/service.asmx?WSDL";
    }
    public static get testWSDL(): string {
        return "https://wswhomo.afip.gov.ar/wsfev1/service.asmx?WSDL";
    }

    /**
     * Consultar CAEA emitidos.
     * @param input token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FECAEAConsultar = (input: service.IFECAEAConsultarInput, options?: any, extraHeaders?: any): Promise<service.IFECAEAConsultarOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.FEV1/FECAEAConsultar";

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FECAEAConsultar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFECAEAConsultarOutput>((resolve, reject) => {
            return this.invoke<{ FECAEAConsultarResponse: service.IFECAEAConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FECAEAConsultarResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Rendición de comprobantes asociados a un CAEA.
     * @param input token de autenticacion y datos de la rendición
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FECAEARegInformativo = (input: service.IFECAEARegInformativoInput, options?: any, extraHeaders?: any): Promise<service.IFECAEARegInformativoOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.FEV1/FECAEARegInformativo";
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FECAEARegInformativo: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("FECAEARegInformativo;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IFECAEARegInformativoOutput>((resolve, reject) => {
            return this.invoke<{ FECAEARegInformativoResponse: service.IFECAEARegInformativoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FECAEARegInformativoResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Método para consultar CAEA sin movimiento
     * Esta operación permite consultar mediante un CAEA, cuáles fueron los puntos de venta que fueron notificados como sin movimiento.
     * El cliente envía el requerimiento, el cual es atendido por el WS, superadas las validaciones de seguridad se informa el CAEA,
     * puntos de venta identificados como sin movimientos y fecha de proceso. En caso de informar el punto de venta, se informan los datos
     * vinculados a ese punto de venta en particular.
     * @param input token de autenticacion CAEA y Punto de Venta
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FECAEASinMovimientoConsultar = (input: service.IFECAEASinMovimientoConsultarInput, options?: any, extraHeaders?: any): Promise<service.IFECAEASinMovimientoConsultarOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.FEV1/FECAEASinMovimientoConsultar";

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FECAEASinMovimientoConsultar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFECAEASinMovimientoConsultarOutput>((resolve, reject) => {
            return this.invoke<{ FECAEASinMovimientoConsultarResponse: service.IFECAEASinMovimientoConsultarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FECAEASinMovimientoConsultarResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Informa CAEA sin movimientos.
     * Esta operación permite informar a la administración cuales fueron los CAEA’s otorgados que no sufrieron movimiento alguno para un determinado punto de venta.
     * El cliente envía el requerimiento, el cual es atendido por el WS, superadas las validaciones de seguridad se registrara la fecha por la cual se informo la falta de movimientos.
     * @param input token de autenticacion CAEA y Punto de Venta
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FECAEASinMovimientoInformar = (input: service.IFECAEASinMovimientoInformarInput, options?: any, extraHeaders?: any): Promise<service.IFECAEASinMovimientoInformarOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.FEV1/FECAEASinMovimientoInformar";

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FECAEASinMovimientoInformar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFECAEASinMovimientoInformarOutput>((resolve, reject) => {
            return this.invoke<{ FECAEASinMovimientoInformarResponse: service.IFECAEASinMovimientoInformarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FECAEASinMovimientoInformarResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Informa CAEA sin movimientos.
     * Esta operación permite solicitar un CAEA. El cliente envía el requerimiento, el cual es atendido por el WS, superadas las validaciones se otorgará un CAEA y
     * su respectivo periodo de vigencia (fecha de validez desde y fecha de validez hasta).
     * Podrá ser solicitado dentro de cada quincena y hasta 5 (cinco) días corridos anteriores al comienzo de cada quincena.
     * Habrá dos quincenas, la primera abarca desde el primero hasta el quince de cada mes y la segunda desde el dieciséis hasta el último día del mes.
     * @param input token de autenticacion, periodo y orden
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FECAEASolicitar = (input: service.IFECAEASolicitarInput, options?: any, extraHeaders?: any): Promise<service.IFECAEASolicitarOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.FEV1/FECAEASolicitar";

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FECAEASolicitar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFECAEASolicitarOutput>((resolve, reject) => {
            return this.invoke<{ FECAEASolicitarResponse: service.IFECAEASolicitarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FECAEASolicitarResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Método de autorización de comprobantes electrónicos por CAE
     * @param input token de autenticacion y datos del comprobante
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con la información del comprobante o lote de comprobantes de ingreso agregándole el CAE otorgado si el comprobante fue aprobado. Ante cualquier anomalía se retorna un array con errores detectados (Errors) o un array de observaciones según corresponda.
     */
    FECAESolicitar = (input: service.IFECAESolicitarInput, options?: any, extraHeaders?: any): Promise<service.IFECAESolicitarOutput> => {
        debug("FECAESolicitar;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.FEV1/FECAESolicitar";
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FECAESolicitar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("FECAESolicitar;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IFECAESolicitarOutput>((resolve, reject) => {
            return this.invoke<{ FECAESolicitarResponse: service.IFECAESolicitarOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve(r.FECAESolicitarResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Método para consultar Comprobantes Emitidos y su código
     * Esta operación permite consultar mediante tipo, numero de comprobante y punto de venta los datos de un comprobante ya emitido. Dentro de los datos del comprobante resultante se obtiene el tipo de emisión utilizado para generar el código de autorización.
     * @param input token de autenticacion y datos del comprobante
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con  los datos del Comprobante coincidente con los parámetros ingresados
     */
    FECompConsultar = (input: service.IFECompConsultarInput, options?: any, extraHeaders?: any): Promise<service.IFECompConsultarOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FECompConsultar: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFECompConsultarOutput>((resolve, reject) => {
            return this.invoke<{ FECompConsultarResponse: service.IFECompConsultarOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FECompConsultar" })
                .then(r => {
                    return resolve(r.FECompConsultarResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de cantidad máxima de registros FECAESolicitar / FECAEARegInformativo
     * Retorna la cantidad máxima de registros que se podrá incluir en un request al método FECAESolicitar / FECAEARegInformativo.
     * @param input token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FECompTotXRequest = (input: service.IFECompTotXRequestInput, options?: any, extraHeaders?: any): Promise<service.IFECompTotXRequestOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FECompTotXRequest: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFECompTotXRequestOutput>((resolve, reject) => {
            return this.invoke<{ FECompTotXRequestResponse: service.IFECompTotXRequestOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FECompTotXRequest" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FECompTotXRequestResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de ultimo valor de comprobante registrado
     * Retorna el ultimo comprobante autorizado para el tipo de comprobante / cuit / punto de venta ingresado / Tipo de Emisión
     * @param input token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FECompUltimoAutorizado = (input: service.IFECompUltimoAutorizadoInput, options?: any, extraHeaders?: any): Promise<service.IFECompUltimoAutorizadoOutput> => {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.FEV1/FECompUltimoAutorizado";

        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FECompUltimoAutorizado: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFECompUltimoAutorizadoOutput>((resolve, reject) => {
            return this.invoke<{ FECompUltimoAutorizadoResponse: service.IFECompUltimoAutorizadoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FECompUltimoAutorizadoResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de cotización de moneda
     * Retorna la última cotización de la base de datos aduanera de la moneda ingresada. Este valor es orientativo.
     * @param input token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FEParamGetCotizacion = (input: service.IFEParamGetCotizacionInput, options?: any, extraHeaders?: any): Promise<service.IFEParamGetCotizacionOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FEParamGetCotizacion: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEParamGetCotizacionOutput>((resolve, reject) => {
            return this.invoke<{ FEParamGetCotizacionResponse: service.IFEParamGetCotizacionOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FEParamGetCotizacion" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEParamGetCotizacionResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de los puntos de venta asignados a Facturación Electrónica que soporten CAE y CAEA vía Web Services
     * Este método permite consultar los puntos de venta para ambos tipos de Código de Autorización (CAE y CAEA) gestionados previamente por la CUIT emisora.
     * @param input token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FEParamGetPtosVenta = (input: service.IFEParamGetPtosVentaInput, options?: any, extraHeaders?: any): Promise<service.IFEParamGetPtosVentaOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FEParamGetPtosVenta: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEParamGetPtosVentaOutput>((resolve, reject) => {
            return this.invoke<{ FEParamGetPtosVentaResponse: service.IFEParamGetPtosVentaOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FEParamGetPtosVenta" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEParamGetPtosVentaResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de valores referenciales de códigos de Tipos de comprobante
     * Este método permite consultar los tipos de comprobantes habilitados en este WS.
     * @param input token de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FEParamGetTiposCbte = (input: service.IFEParamGetTiposCbteInput, options?: any, extraHeaders?: any): Promise<service.IFEParamGetTiposCbteOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FEParamGetTiposCbte: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEParamGetTiposCbteOutput>((resolve, reject) => {
            return this.invoke<{ FEParamGetTiposCbteResponse: service.IFEParamGetTiposCbteOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FEParamGetTiposCbte" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEParamGetTiposCbteResponse);
                })
                .catch(err => reject(err));
        });

    };

    /**
     * Recuperador de valores referenciales de códigos de Tipos de Conceptos
     * Este método devuelve los tipos de conceptos posibles en este WS
     * @param input datos de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FEParamGetTiposConcepto = (input: service.IFEParamGetTiposConceptoInput, options?: any, extraHeaders?: any): Promise<service.IFEParamGetTiposConceptoOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FEParamGetTiposConcepto: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEParamGetTiposConceptoOutput>((resolve, reject) => {
            return this.invoke<{ FEParamGetTiposConceptoResponse: service.IFEParamGetTiposConceptoOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FEParamGetTiposConcepto" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEParamGetTiposConceptoResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de valores referenciales de códigos de Tipos de Documentos
     * Este método retorna el universo de tipos de documentos disponibles en el presente WS.
     * @param input datos de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FEParamGetTiposDoc = (input: service.IFEParamGetTiposDocInput, options?: any, extraHeaders?: any): Promise<service.IFEParamGetTiposDocOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FEParamGetTiposDoc: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEParamGetTiposDocOutput>((resolve, reject) => {
            return this.invoke<{ FEParamGetTiposDocResponse: service.IFEParamGetTiposDocOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FEParamGetTiposDoc" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEParamGetTiposDocResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de valores referenciales de códigos de Tipos de Alícuotas
     * Mediante este método se obtiene la totalidad de alícuotas de IVA posibles de uso en el presente WS, detallando código y descripción.
     * @param input datos de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FEParamGetTiposIva = (input: service.IFEParamGetTiposIvaInput, options?: any, extraHeaders?: any): Promise<service.IFEParamGetTiposIvaOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FEParamGetTiposIva: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEParamGetTiposIvaOutput>((resolve, reject) => {
            return this.invoke<{ FEParamGetTiposIvaResponse: service.IFEParamGetTiposIvaOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FEParamGetTiposIva" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEParamGetTiposIvaResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de valores referenciales de códigos de Tipos de Monedas
     * Este método retorna el universo de Monedas disponibles en el presente WS, indicando id y descripción de cada una.
     * @param input datos de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FEParamGetTiposMonedas = (input: service.IFEParamGetTiposMonedasInput, options?: any, extraHeaders?: any): Promise<service.IFEParamGetTiposMonedasOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FEParamGetTiposMonedas: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEParamGetTiposMonedasOutput>((resolve, reject) => {
            return this.invoke<{ FEParamGetTiposMonedasResponse: service.IFEParamGetTiposMonedasOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FEParamGetTiposMonedas" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEParamGetTiposMonedasResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de valores referenciales de códigos de Tipos de datos Opcionales
     * Este método permite consultar los códigos y descripciones de los tipos de datos Opcionales que se encuentran habilitados para ser usados en el WS.
     * @param input datos de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FEParamGetTiposOpcional = (input: service.IFEParamGetTiposOpcionalInput, options?: any, extraHeaders?: any): Promise<service.IFEParamGetTiposOpcionalOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FEParamGetTiposOpcional: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEParamGetTiposOpcionalOutput>((resolve, reject) => {
            return this.invoke<{ FEParamGetTiposOpcionalResponse: service.IFEParamGetTiposOpcionalOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FEParamGetTiposOpcional" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEParamGetTiposOpcionalResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Método para consultar valores referenciales de códigos de países
     * Esta operación permite consultar los códigos de países y descripción de los mismos.
     * @param input datos de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FEParamGetTiposPaises = (input: service.IFEParamGetTiposPaisesInput, options?: any, extraHeaders?: any): Promise<service.IFEParamGetTiposPaisesOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FEParamGetTiposPaises: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEParamGetTiposPaisesOutput>((resolve, reject) => {
            return this.invoke<{ FEParamGetTiposPaisesResponse: service.IFEParamGetTiposPaisesOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FEParamGetTiposPaises" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEParamGetTiposPaisesResponse);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Recuperador de valores referenciales de códigos de Tipos de Tributos
     * Devuelve los posibles códigos de tributos que puede contener un comprobante y su descripción.
     * @param input datos de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos consultados
     */
    FEParamGetTiposTributos = (input: service.IFEParamGetTiposTributosInput, options?: any, extraHeaders?: any): Promise<service.IFEParamGetTiposTributosOutput> => {
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    $: { xmlns: "http://ar.gov.afip.dif.FEV1/" },
                    FEParamGetTiposTributos: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        return new Promise<service.IFEParamGetTiposTributosOutput>((resolve, reject) => {
            return this.invoke<{ FEParamGetTiposTributosResponse: service.IFEParamGetTiposTributosOutput }>(soapEnvelope, undefined, { SOAPAction: "http://ar.gov.afip.dif.FEV1/FEParamGetTiposTributos" })
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEParamGetTiposTributosResponse);
                })
                .catch(err => reject(err));
        });
    };

    FEDummy(input?: service.IFEDummyInput, options?: any, extraHeaders?: any): Promise<service.IFEDummyOutput> {
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gov.afip.dif.FEV1/FEDummy";
        const builder = new xml2js.Builder({ headless: true });
        const envelope = {
            "soap:Envelope": {
                $: {
                    "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope"
                },
                "soap:Header": <any>undefined,
                "soap:Body": {
                    FEDummy: input
                }
            }
        };
        const soapEnvelope = builder.buildObject(envelope);
        debug("soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IFEDummyOutput>((resolve, reject) => {
            return this.invoke<{ FEDummyResponse: service.IFEDummyOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    if (!r) {
                        return reject(new BaseError(500, "empty-response", "La respuesta del webservice esta vacia", undefined));
                    }
                    return resolve(r.FEDummyResponse);
                })
                .catch(err => reject(err));
        });
    }
}