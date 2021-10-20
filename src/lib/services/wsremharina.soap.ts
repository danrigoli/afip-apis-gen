import * as xml2js from "xml2js";
import { SoapService } from "./soap11";
import * as service from "./wsdl/RemHarinaService/RemHarinaServiceSOAP";

import debugModule from "debug";
const debug = debugModule("afip-apis:remHarinaService");

const envelope = {
    "soapenv:Envelope": {
        $: {
            "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
            "xmlns:rem": "http://ar.gob.afip.wsremharina/RemHarinaService/"
        },
        "soapenv:Header": <any>undefined,
        "soapenv:Body": <any>undefined,
    }
};

export { RemHarinaServiceSOAPTypes } from "./wsdl/RemHarinaService/RemHarinaServiceSOAP";

export class RemHarinaService extends SoapService implements service.IRemHarinaServiceSOAPSoap {
    public static get serviceId(): string {
        return "wsremharina";
    }
    public static get produccionWSDL(): string {
        return "https://serviciosjava.afip.gob.ar/wsremharina/RemHarinaService?wsdl";
    }
    public static get testWSDL(): string {
        return "https://fwshomo.afip.gov.ar/wsremharina/RemHarinaService?wsdl";
    }

    dummy = (options?: any, extraHeaders?: any): Promise<service.IdummyOutput> => {
        debug("dummy;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/dummy";
        const builder = new xml2js.Builder({ headless: true });
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IdummyOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:dummyResponse": service.IdummyOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => {
                    return resolve (r["ns2:dummyResponse"]);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    };
    generarRemito = (input: service.IgenerarRemitoInput, options?: any, extraHeaders?: any): Promise<service.IgenerarRemitoOutput> => {
        debug("generarRemito;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/generarRemito";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:generarRemitoRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IgenerarRemitoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:generarRemitoResponse": service.IgenerarRemitoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:generarRemitoResponse"]))
                .catch(err => reject(err));
        });
    };
    autorizarRemito = (input: service.IautorizarRemitoInput, options?: any, extraHeaders?: any): Promise<service.IautorizarRemitoOutput> => {
        debug("autorizarRemito;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/autorizarRemito";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:autorizarRemitoRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IautorizarRemitoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:autorizarRemitoResponse": service.IautorizarRemitoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:autorizarRemitoResponse"]))
                .catch(err => reject(err));
        });
    };
    anularRemito = (input: service.IanularRemitoInput, options?: any, extraHeaders?: any): Promise<service.IanularRemitoOutput> => {
        debug("anularRemito;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/anularRemito";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:anularRemitoRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IanularRemitoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:anularRemitoResponse": service.IanularRemitoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:anularRemitoResponse"]))
                .catch(err => reject(err));
        });
    };
    emitirRemito = (input: service.IemitirRemitoInput, options?: any, extraHeaders?: any): Promise<service.IemitirRemitoOutput> => {
        debug("emitirRemito;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/emitirRemito";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:emitirRemitoRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IemitirRemitoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:emitirRemitoResponse": service.IemitirRemitoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:emitirRemitoResponse"]))
                .catch(err => reject(err));
        });
    };
    registrarRecepcion = (input: service.IregistrarRecepcionInput, options?: any, extraHeaders?: any): Promise<service.IregistrarRecepcionOutput> => {
        debug("registrarRecepcion;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/registrarRecepcion";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:registrarRecepcionRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IregistrarRecepcionOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:registrarRecepcionResponse": service.IregistrarRecepcionOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:registrarRecepcionResponse"]))
                .catch(err => reject(err));
        });
    };
    modificarViaje = (input: service.ImodificarViajeInput, options?: any, extraHeaders?: any): Promise<service.ImodificarViajeOutput> => {
        debug("modificarViaje;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/modificarViaje";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:modificarViajeRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.ImodificarViajeOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:modificarViajeResponse": service.ImodificarViajeOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:modificarViajeResponse"]))
                .catch(err => reject(err));
        });
    };
    informarContingencia = (input: service.IinformarContingenciaInput, options?: any, extraHeaders?: any): Promise<service.IinformarContingenciaOutput> => {
        debug("informarContingencia;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/informarContingencia";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:informarContingenciaRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IinformarContingenciaOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:informarContingenciaResponse": service.IinformarContingenciaOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:informarContingenciaResponse"]))
                .catch(err => reject(err));
        });
    };
    /**
     * Consultar Último Remito Emitido
     * Este método permite a un Emisor obtener el último número de remito que se emitió para un determinado tipo de comprobante y punto de emisión
     * @param input authRequest datos de autenticacion y datos del remito
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los datos del ultimo remito
     */
    consultarUltimoRemitoEmitido = (input: service.IconsultarUltimoRemitoEmitidoInput, options?: any, extraHeaders?: any): Promise<service.IconsultarUltimoRemitoEmitidoOutput> => {
        debug("consultarUltimoRemitoEmitido;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarUltimoRemitoEmitido";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarUltimoRemitoEmitidoRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarUltimoRemitoEmitidoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarUltimoRemitoEmitidoResponse": service.IconsultarUltimoRemitoEmitidoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarUltimoRemitoEmitidoResponse"]))
                .catch(err => reject(err));
        });
    };
    consultarRemito = (input: service.IconsultarRemitoInput, options?: any, extraHeaders?: any): Promise<service.IconsultarRemitoOutput> => {
        debug("consultarRemito;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarRemito";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarRemitoRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarRemitoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarRemitoResponse": service.IconsultarRemitoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarRemitoResponse"]))
                .catch(err => reject(err));
        });
    };
    /**
     * Consultar Tipos de Comprobante
     * Este método permite obtener los códigos y la descripción para cada tipo de comprobante.
     * @param input authRequest datos de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los tipos de comprobante
     */
    consultarTiposComprobante = (input: service.IconsultarTiposComprobanteInput, options?: any, extraHeaders?: any): Promise<service.IconsultarTiposComprobanteOutput> => {
        debug("consultarTiposComprobante;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarTiposComprobante";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarTiposComprobanteRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarTiposComprobanteOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarTiposComprobanteResponse": service.IconsultarTiposComprobanteOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarTiposComprobanteResponse"]))
                .catch(err => reject(err));
        });
    };

    /**
     * Consultar Tipos de Estado
     * Este método permite obtener los códigos y la descripción de los estados por los cuales puede pasar un remito.
     * @param input authRequest datos de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los tipos de estado
     */
    consultarTiposEstado = (input: service.IconsultarTiposEstadoInput, options?: any, extraHeaders?: any): Promise<service.IconsultarTiposEstadoOutput> => {
        debug("consultarTiposEstado;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarTiposEstado";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarTiposEstadoRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarTiposEstadoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarTiposEstadoResponse": service.IconsultarTiposEstadoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarTiposEstadoResponse"]))
                .catch(err => reject(err));
        });
    };
    /**
     * Consultar Tipos de Contingencia
     * Este método permite obtener los códigos y la descripción para cada tipo de contingencia que puede reportar.
     * @param input authRequest datos de autenticacion
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los tipos de contingencia
     */
    consultarTiposContingencia = (input: service.IconsultarTiposContingenciaInput, options?: any, extraHeaders?: any): Promise<service.IconsultarTiposContingenciaOutput> => {
        debug("consultarTiposContingencia;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarTiposContingencia";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarTiposContingenciaRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarTiposContingenciaOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarTiposContingenciaResponse": service.IconsultarTiposContingenciaOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarTiposContingenciaResponse"]))
                .catch(err => reject(err));
        });
    };
    /**
     * Consultar Códigos Domicilio Este método permite obtener los códigos para identificar los domicilios registrados que posee la CUIT indicada.
     * @param input authRequest:datos de autenticacion, cuitTitularDomicilio:Cuit del destinatario o depositario
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los resultados
     */
    consultarCodigosDomicilio = (input: service.IconsultarCodigosDomicilioInput, options?: any, extraHeaders?: any): Promise<service.IconsultarCodigosDomicilioOutput> => {
        debug("consultarTiposContingencia;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarCodigosDomicilio";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarCodigosDomicilioRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarCodigosDomicilioOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarCodigosDomicilioResponse": service.IconsultarCodigosDomicilioOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarCodigosDomicilioResponse"]))
                .catch(err => reject(err));
        });
    };
    /**
     * Consultar Puntos de Emisión
     * Este método permite obtener los Puntos de Emision que posee la CUIT representada.
     * @param input {authRequest: Contiene información referente a la autenticación }
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los resultados
     */
    consultarPuntosEmision = (input: service.IconsultarPuntosEmisionInput, options?: any, extraHeaders?: any): Promise<service.IconsultarPuntosEmisionOutput> => {
        debug("consultarPuntosEmision;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarPuntosEmision";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarPuntosEmisionRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarPuntosEmisionOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarPuntosEmisionResponse": service.IconsultarPuntosEmisionOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarPuntosEmisionResponse"]))
                .catch(err => reject(err));
        });
    };
    /**
     * Consultar Tipos de Mercadería
     * Este método permite obtener los códigos y la descripción para cada tipo de mercadería que puede remitirse en Remitos de Harina.
     * @param input {authRequest: Contiene información referente a la autenticación }
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los resultados
     */
    consultarTiposMercaderia = (input: service.IconsultarTiposMercaderiaInput, options?: any, extraHeaders?: any): Promise<service.IconsultarTiposMercaderiaOutput> => {
        debug("consultarTiposMercaderia;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarTiposMercaderia";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarTiposMercaderiaRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarTiposMercaderiaOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarTiposMercaderiaResponse": service.IconsultarTiposMercaderiaOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarTiposMercaderiaResponse"]))
                .catch(err => reject(err));
        });
    };

    /**
     * Consultar Tipos de Unidades de Venta
     * Este método permite obtener los códigos y la descripción para cada tipo de unidades de venta que puede utilizarse en cada ítem de la descripción de la mercadería que puede remitirse en Remitos de Harina.
     * @param input {authRequest: Contiene información referente a la autenticación }
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los resultados
     */
    consultarUnidadesVenta = (input: service.IconsultarUnidadesVentaInput, options?: any, extraHeaders?: any): Promise<service.IconsultarUnidadesVentaOutput> => {
        debug("consultarUnidadesVenta;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarUnidadesVenta";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarUnidadesVentaRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarUnidadesVentaOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarUnidadesVentaResponse": service.IconsultarUnidadesVentaOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarUnidadesVentaResponse"]))
                .catch(err => reject(err));
        });
    };

    /**
     * Consultar Tipos de Unidades de Embalaje
     * Este método permite obtener los códigos y la descripción para cada tipo de embalaje que puede utilizarse en cada ítem de la descripción de la mercadería que puede remitirse en Remitos de Harina.
     * @param input {authRequest: Contiene información referente a la autenticación }
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los resultados
     */
    consultarTiposEmbalaje = (input: service.IconsultarTiposEmbalajeInput, options?: any, extraHeaders?: any): Promise<service.IconsultarTiposEmbalajeOutput> => {
        debug("consultarTiposEmbalaje;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarTiposEmbalaje";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarTiposEmbalajeRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarTiposEmbalajeOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarTiposEmbalajeResponse": service.IconsultarTiposEmbalajeOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarTiposEmbalajeResponse"]))
                .catch(err => reject(err));
        });
    };

    /**
     * Consultar Remitos Emisor
     * Este método permite obtener los remitos generados en el rol de emisor de la CUIT autenticada.
     * La consulta debe realizarse para un Punto de Emisión específico e indicar un rango de fechas dentro de un mismo año calendario y como máximo de 31 días de diferencia.
     * @param input {authRequest: Contiene información referente a la autenticación }
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los resultados
     */
    consultarRemitosEmisor = (input: service.IconsultarRemitosEmisorInput, options?: any, extraHeaders?: any): Promise<service.IconsultarRemitosEmisorOutput> => {
        debug("consultarRemitosEmisor;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarRemitosEmisor";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarRemitosEmisorRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarRemitosEmisorOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarRemitosEmisorResponse": service.IconsultarRemitosEmisorOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarRemitosEmisorResponse"]))
                .catch(err => reject(err));
        });
    };

    /**
     * Consultar Remitos Autorizador
     * Este método permite obtener los remitos generados donde la CUIT autenticada está relacionada con el rol de Autorizador.
     * La consulta debe indicar el rol del autorizador, Titular o Depositario, y el estado de la autorización por el cual se consulta: pendiente, autorizado o denegado.
     * @param input {authRequest: Contiene información referente a la autenticación }
     * @param options undefined
     * @param extraHeaders undefined
     * @returns Promise con los resultados
     */
    consultarRemitosAutorizador = (input: service.IconsultarRemitosAutorizadorInput, options?: any, extraHeaders?: any): Promise<service.IconsultarRemitosAutorizadorOutput> => {
        debug("consultarRemitosAutorizador;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarRemitosAutorizador";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarRemitosAutorizadorRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarRemitosAutorizadorOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarRemitosAutorizadorResponse": service.IconsultarRemitosAutorizadorOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarRemitosAutorizadorResponse"]))
                .catch(err => reject(err));
        });
    };
    consultarRemitosReceptor = (input: service.IconsultarRemitosReceptorInput, options?: any, extraHeaders?: any): Promise<service.IconsultarRemitosReceptorOutput> => {
        debug("consultarRemitosReceptor;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarRemitosReceptor";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarRemitosReceptorRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarRemitosReceptorOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarRemitosReceptorResponse": service.IconsultarRemitosReceptorOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarRemitosReceptorResponse"]))
                .catch(err => reject(err));
        });
    };
    consultarEstadosRemito = (input: service.IconsultarEstadosRemitoInput, options?: any, extraHeaders?: any): Promise<service.IconsultarEstadosRemitoOutput> => {
        debug("consultarEstadosRemito;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarEstadosRemito";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarEstadosRemitoRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarEstadosRemitoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarEstadosRemitoResponse": service.IconsultarEstadosRemitoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarEstadosRemitoResponse"]))
                .catch(err => reject(err));
        });
    };
    registrarReingreso = (input: service.IregistrarReingresoInput, options?: any, extraHeaders?: any): Promise<service.IregistrarReingresoOutput> => {
        debug("registrarReingreso;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/registrarReingreso";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:registrarReingresoRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IregistrarReingresoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:registrarReingresoResponse": service.IregistrarReingresoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:registrarReingresoResponse"]))
                .catch(err => reject(err));
        });
    };
    registrarRedestino = (input: service.IregistrarRedestinoInput, options?: any, extraHeaders?: any): Promise<service.IregistrarRedestinoOutput> => {
        debug("registrarRedestino;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/registrarRedestino";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:registrarRedestinoRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IregistrarRedestinoOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:registrarRedestinoResponse": service.IregistrarRedestinoOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:registrarRedestinoResponse"]))
                .catch(err => reject(err));
        });
    };

    consultarPaises = (input: service.IconsultarPaisesInput, options?: any, extraHeaders?: any): Promise<service.IconsultarPaisesOutput> => {
        debug("consultarPaises;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarPaises";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarPaisesRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarPaisesOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarPaisesResponse": service.IconsultarPaisesOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarPaisesResponse"]))
                .catch(err => reject(err));
        });
    };

    consultarAduanas = (input: service.IconsultarAduanasInput, options?: any, extraHeaders?: any): Promise<service.IconsultarAduanasOutput> => {
        debug("consultarAduanas;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarAduanas";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarAduanasRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarAduanasOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarAduanasResponse": service.IconsultarAduanasOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarAduanasResponse"]))
                .catch(err => reject(err));
        });
    };

    consultarProvincias = (input: service.IconsultarProvinciasInput, options?: any, extraHeaders?: any): Promise<service.IconsultarProvinciasOutput> => {
        debug("registrarRedestino;");
        extraHeaders = extraHeaders || {};
        extraHeaders.SOAPAction = "http://ar.gob.afip.wsremharina/RemHarinaService/consultarProvincias";
        const builder = new xml2js.Builder({ headless: true });
        envelope["soapenv:Envelope"]["soapenv:Body"] = <any>{ "rem:consultarProvinciasRequest": input };
        const soapEnvelope = builder.buildObject(envelope);
        debug("dummy;soapEnvelope: %s", soapEnvelope);
        return new Promise<service.IconsultarProvinciasOutput>((resolve, reject) => {
            return this.invoke<{ "ns2:consultarProvinciasResponse": service.IconsultarProvinciasOutput }>(soapEnvelope, undefined, extraHeaders)
                .then(r => resolve(r["ns2:consultarProvinciasResponse"]))
                .catch(err => reject(err));
        });
    };

}