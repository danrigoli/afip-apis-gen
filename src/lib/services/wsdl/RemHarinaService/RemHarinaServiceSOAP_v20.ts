type short = number;
type long = number;
type int = number;
type decimal = number;
type date = Date;
type base64Binary = string;

export interface IdummyInput { }

export interface IdummyOutput {
    dummyReturn: RemHarinaServiceSOAPTypes.IdummyReturn;
}

export interface IgenerarRemitoInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#IdReqClienteSimpleType(minInclusive,maxInclusive,fractionDigits) */
    idReqCliente: long;
    remito: RemHarinaServiceSOAPTypes.Iremito;
}

export interface IgenerarRemitoOutput {
    generarRemitoReturn: RemHarinaServiceSOAPTypes.IgenerarRemitoReturn;
}

export interface IautorizarRemitoInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
    codRemito: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#AutorizacionSimpleType(A,D) */
    estado: "A" | "D";
}

export interface IautorizarRemitoOutput {
    operacionReturn: RemHarinaServiceSOAPTypes.IoperacionReturn;
}

export interface IanularRemitoInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
    codRemito: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#Texto250SimpleType(minLength,maxLength) */
    observacion: string;
}

export interface IanularRemitoOutput {
    operacionReturn: RemHarinaServiceSOAPTypes.IoperacionReturn;
}

export interface IemitirRemitoInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
    codRemito: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:decimal(undefined) */
    distanciaKm: decimal;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
    fechaInicioViaje: string;
    vehiculo: RemHarinaServiceSOAPTypes.Ivehiculo;
}

export interface IemitirRemitoOutput {
    emitirRemitoReturn: RemHarinaServiceSOAPTypes.IemitirRemitoReturn;
}

export interface IregistrarRecepcionInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
    codRemito: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
    fecha: date;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#EstadoRecepcionSimpleType(ACE,ACP,REC,PEN) */
    estado: "ACE" | "ACP" | "REC" | "PEN";
    arrayRecepcionMercaderia: RemHarinaServiceSOAPTypes.IarrayRecepcionMercaderia;
}

export interface IregistrarRecepcionOutput {
    operacionReturn: RemHarinaServiceSOAPTypes.IoperacionReturn;
}

export interface ImodificarViajeInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
    codRemito: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
    cuitTransportista: long;
    vehiculo: RemHarinaServiceSOAPTypes.Ivehiculo;
}

export interface ImodificarViajeOutput {
    operacionReturn: RemHarinaServiceSOAPTypes.IoperacionReturn;
}

export interface IinformarContingenciaInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
    codRemito: long;
    contingencia: RemHarinaServiceSOAPTypes.Icontingencia;
}

export interface IinformarContingenciaOutput {
    operacionReturn: RemHarinaServiceSOAPTypes.IoperacionReturn;
}

export interface IconsultarUltimoRemitoEmitidoInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
    tipoComprobante: short;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#PuntoEmisionSimpleType(minInclusive,maxInclusive) */
    puntoEmision: long;
}

export interface IconsultarUltimoRemitoEmitidoOutput {
    consultarUltimoRemitoReturn: RemHarinaServiceSOAPTypes.IconsultarUltimoRemitoReturn;
}

export interface IconsultarRemitoInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
    codRemito: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#IdReqClienteSimpleType(minInclusive,maxInclusive,fractionDigits) */
    idReqCliente: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
    tipoComprobante: short;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#PuntoEmisionSimpleType(minInclusive,maxInclusive) */
    puntoEmision: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#NumeroRemitoSimpleType(minInclusive,maxInclusive) */
    nroComprobante: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
    cuitEmisor: long;
}

export interface IconsultarRemitoOutput {
    consultarRemitoReturn: RemHarinaServiceSOAPTypes.IconsultarRemitoReturn;
}

export interface IconsultarTiposComprobanteInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
}

export interface IconsultarTiposComprobanteOutput {
    codigoDescripcionReturn: {
        arrayCodigoDescripcion: {
            codigoDescripcion: RemHarinaServiceSOAPTypes.IcodigoDescripcion[];
        };
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
    };
}

export interface IconsultarTiposEstadoInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
}

export interface IconsultarTiposEstadoOutput {
    codigoDescripcionReturn: {
        arrayCodigoDescripcion: {
            codigoDescripcionString: RemHarinaServiceSOAPTypes.IcodigoDescripcionString[];
        };
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
    };
}

export interface IconsultarTiposContingenciaInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
}

export interface IconsultarTiposContingenciaOutput {
    codigoDescripcionReturn: {
        arrayCodigoDescripcion: {
            codigoDescripcion: RemHarinaServiceSOAPTypes.IcodigoDescripcion[];
        };
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
    };
}

export interface IconsultarCodigosDomicilioInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
    cuitTitularDomicilio: long;
}

export interface IconsultarCodigosDomicilioOutput {
    consultarCodigosDomicilioReturn: RemHarinaServiceSOAPTypes.IconsultarCodigosDomicilioReturn;
}

export interface IconsultarPuntosEmisionInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
}

export interface IconsultarPuntosEmisionOutput {
    consultarPuntosEmisionReturn: RemHarinaServiceSOAPTypes.IconsultarPuntosEmisionReturn;
}

export interface IconsultarTiposMercaderiaInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
}

export interface IconsultarTiposMercaderiaOutput {
    codigoDescripcionReturn: {
        arrayCodigoDescripcion: {
            codigoDescripcion: RemHarinaServiceSOAPTypes.IcodigoDescripcion[];
        };
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
    };
}

export interface IconsultarUnidadesVentaInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
}

export interface IconsultarUnidadesVentaOutput {
    codigoDescripcionReturn: {
        arrayCodigoDescripcion: {
            codigoDescripcion: RemHarinaServiceSOAPTypes.IcodigoDescripcion[];
        };
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
    };
}

export interface IconsultarTiposEmbalajeInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
}

export interface IconsultarTiposEmbalajeOutput {
    codigoDescripcionReturn: {
        arrayCodigoDescripcion: {
            codigoDescripcion: RemHarinaServiceSOAPTypes.IcodigoDescripcion[];
        };
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
    };
}

export interface IconsultarRemitosEmisorInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    rangoFecha: RemHarinaServiceSOAPTypes.IrangoFecha;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#PuntoEmisionSimpleType(minInclusive,maxInclusive) */
    ptoEmision: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
    tipoComprobante: short;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#EstadoRemitoSimpleType(length) */
    estado: string;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
    nroPagina: short;
}

export interface IconsultarRemitosEmisorOutput {
    consultarRemitosReturn: RemHarinaServiceSOAPTypes.IconsultarRemitosReturn;
}

export interface IconsultarRemitosAutorizadorInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#RolAutorizadorSimpleType(TIT,DEP) */
    rolAutorizador: "TIT" | "DEP";
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#EstadoAutorizacionSimpleType(PE,AU,RE) */
    estadoAutorizacion: "PE" | "AU" | "RE";
    rangoFecha: RemHarinaServiceSOAPTypes.IrangoFecha;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
    cuitEmisor: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
    nroPagina: short;
}

export interface IconsultarRemitosAutorizadorOutput {
    consultarRemitosReturn: RemHarinaServiceSOAPTypes.IconsultarRemitosReturn;
}

export interface IconsultarRemitosReceptorInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#EstadoRecepcionSimpleType(ACE,ACP,REC,PEN) */
    estadoRecepcion: "ACE" | "ACP" | "REC" | "PEN";
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
    cuitEmisor: long;
    rangoFecha: RemHarinaServiceSOAPTypes.IrangoFecha;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
    nroPagina: short;
}

export interface IconsultarRemitosReceptorOutput {
    consultarRemitosReturn: RemHarinaServiceSOAPTypes.IconsultarRemitosReturn;
}

export interface IconsultarEstadosRemitoInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
    codRemito: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#IdReqClienteSimpleType(minInclusive,maxInclusive,fractionDigits) */
    idReqCliente: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
    tipoComprobante: short;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#PuntoEmisionSimpleType(minInclusive,maxInclusive) */
    puntoEmision: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#NumeroRemitoSimpleType(minInclusive,maxInclusive) */
    nroComprobante: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
    cuitEmisor: long;
}

export interface IconsultarEstadosRemitoOutput {
    estadosRemitoReturn: RemHarinaServiceSOAPTypes.IestadosRemitoReturn;
}

export interface IregistrarReingresoInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#IdReqClienteSimpleType(minInclusive,maxInclusive,fractionDigits) */
    idReqCliente: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
    codRemito: long;
}

export interface IregistrarReingresoOutput {
    operacionReturn: RemHarinaServiceSOAPTypes.IoperacionReturn;
}

export interface IregistrarRedestinoInput {
    authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#IdReqClienteSimpleType(minInclusive,maxInclusive,fractionDigits) */
    idReqCliente: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
    codRemito: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
    cuitReceptor: long;
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#TipoDomicilioSimpleType(1,3) */
    tipoDomReceptor: "1" | "3";
    /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:int(undefined) */
    codDomReceptor: int;
    arrayRedestinoMercaderia: RemHarinaServiceSOAPTypes.IarrayRedestinoMercaderia;
}

export interface IregistrarRedestinoOutput {
    registrarRedestinoReturn: RemHarinaServiceSOAPTypes.IregistrarRedestinoReturn;
}

export interface IRemHarinaServiceSOAPSoap {
    dummy: (input: IdummyInput, cb: (err: any | null, result: IdummyOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    generarRemito: (input: IgenerarRemitoInput, cb: (err: any | null, result: IgenerarRemitoOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    autorizarRemito: (input: IautorizarRemitoInput, cb: (err: any | null, result: IautorizarRemitoOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    anularRemito: (input: IanularRemitoInput, cb: (err: any | null, result: IanularRemitoOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    emitirRemito: (input: IemitirRemitoInput, cb: (err: any | null, result: IemitirRemitoOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    registrarRecepcion: (input: IregistrarRecepcionInput, cb: (err: any | null, result: IregistrarRecepcionOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    modificarViaje: (input: ImodificarViajeInput, cb: (err: any | null, result: ImodificarViajeOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    informarContingencia: (input: IinformarContingenciaInput, cb: (err: any | null, result: IinformarContingenciaOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarUltimoRemitoEmitido: (input: IconsultarUltimoRemitoEmitidoInput, cb: (err: any | null, result: IconsultarUltimoRemitoEmitidoOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarRemito: (input: IconsultarRemitoInput, cb: (err: any | null, result: IconsultarRemitoOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposComprobante: (input: IconsultarTiposComprobanteInput, cb: (err: any | null, result: IconsultarTiposComprobanteOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposEstado: (input: IconsultarTiposEstadoInput, cb: (err: any | null, result: IconsultarTiposEstadoOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposContingencia: (input: IconsultarTiposContingenciaInput, cb: (err: any | null, result: IconsultarTiposContingenciaOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarCodigosDomicilio: (input: IconsultarCodigosDomicilioInput, cb: (err: any | null, result: IconsultarCodigosDomicilioOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarPuntosEmision: (input: IconsultarPuntosEmisionInput, cb: (err: any | null, result: IconsultarPuntosEmisionOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposMercaderia: (input: IconsultarTiposMercaderiaInput, cb: (err: any | null, result: IconsultarTiposMercaderiaOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarUnidadesVenta: (input: IconsultarUnidadesVentaInput, cb: (err: any | null, result: IconsultarUnidadesVentaOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposEmbalaje: (input: IconsultarTiposEmbalajeInput, cb: (err: any | null, result: IconsultarTiposEmbalajeOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarRemitosEmisor: (input: IconsultarRemitosEmisorInput, cb: (err: any | null, result: IconsultarRemitosEmisorOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarRemitosAutorizador: (input: IconsultarRemitosAutorizadorInput, cb: (err: any | null, result: IconsultarRemitosAutorizadorOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarRemitosReceptor: (input: IconsultarRemitosReceptorInput, cb: (err: any | null, result: IconsultarRemitosReceptorOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    consultarEstadosRemito: (input: IconsultarEstadosRemitoInput, cb: (err: any | null, result: IconsultarEstadosRemitoOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    registrarReingreso: (input: IregistrarReingresoInput, cb: (err: any | null, result: IregistrarReingresoOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    registrarRedestino: (input: IregistrarRedestinoInput, cb: (err: any | null, result: IregistrarRedestinoOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
}

export namespace RemHarinaServiceSOAPTypes {
    export interface IdummyReturn {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        appserver: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        authserver: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        dbserver: string;
    }
    export interface IauthRequest {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        token: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        sign: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
        cuitRepresentada: long;
    }
    export interface IarrayIdLocomotora {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        identificador: string;
    }
    export interface IarrayIdVagon {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        identificador: string;
    }
    export interface Iferroviario {
        arrayIdLocomotora: RemHarinaServiceSOAPTypes.IarrayIdLocomotora;
        arrayIdVagon: RemHarinaServiceSOAPTypes.IarrayIdVagon;
    }
    export interface IarrayDominioAcoplado {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        identificador: string;
    }
    export interface Iautomotor {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        dominioVehiculo: string;
        arrayDominioAcoplado?: RemHarinaServiceSOAPTypes.IarrayDominioAcoplado;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
        cuitConductor: long;
    }
    export interface Ivehiculo {
        ferroviario?: RemHarinaServiceSOAPTypes.Iferroviario;
        automotor?: RemHarinaServiceSOAPTypes.Iautomotor;
    }
    export interface Iviaje {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
        cuitTransportista: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
        fechaInicioViaje: date;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:decimal(undefined) */
        distanciaKm: decimal;
        vehiculo: RemHarinaServiceSOAPTypes.Ivehiculo;
    }
    export interface Imercaderia {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#OrdenSimpleType(minInclusive,maxInclusive) */
        orden: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
        codTipo: short;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        codComer: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        descComer: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
        codTipoEmb: short;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:int(undefined) */
        cantidadEmb: int;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
        codTipoUnidad: short;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#Decimal62SimpleType(minInclusive,maxInclusive) */
        cantidadUnidad: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#Decimal62SimpleType(minInclusive,maxInclusive) */
        pesoNetoKg: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#Decimal62SimpleType(minInclusive,maxInclusive) */
        pesoNetoRecKg: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#Decimal62SimpleType(minInclusive,maxInclusive) */
        pesoNetoPerKg: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#Decimal62SimpleType(minInclusive,maxInclusive) */
        pesoNetoRedKg: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#Decimal62SimpleType(minInclusive,maxInclusive) */
        pesoNetoReiKg: long;
    }
    export interface IarrayMercaderia {
        mercaderia: RemHarinaServiceSOAPTypes.Imercaderia[];
    }
    export interface Iremito {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#TipoMovimientoSimpleType(ENV,CAN,RET,RED) */
        tipoMovimiento: "ENV" | "CAN" | "RET" | "RED";
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
        tipoCmp: short;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#TipoEmisorSimpleType(U,I) */
        tipoEmisor: "U" | "I";
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#RUCASimpleType(maxExclusive,minExclusive) */
        rucaEstEmisor: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#PuntoEmisionSimpleType(minInclusive,maxInclusive) */
        puntoEmision: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
        cuitTitular: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#TipoDepositarioSimpleType(E,I,D) */
        tipoDepositario: "E" | "I" | "D";
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
        cuitDepositario?: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#RUCASimpleType(maxExclusive,minExclusive) */
        rucaEstDepositario?: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#TipoDomicilioSimpleType(1,3) */
        tipoDomOrigen: "1" | "3";
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:int(undefined) */
        codDomOrigen: int;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
        cuitReceptor: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:int(undefined) */
        tipoDomReceptor: int;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:int(undefined) */
        codDomReceptor: int;
        viaje: RemHarinaServiceSOAPTypes.Iviaje;
        arrayMercaderia: RemHarinaServiceSOAPTypes.IarrayMercaderia;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
        codRemRedestinar: long;
    }
    export interface IdatosAutAFIP {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#NumeroRemitoSimpleType(minInclusive,maxInclusive) */
        nroRemito: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
        codAutorizacion: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
        fechaEmision: date;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
        fechaVencimiento: date;
    }
    export interface Ileyenda {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:int(undefined) */
        codLeyenda: int;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#Texto250SimpleType(minLength,maxLength) */
        descripcion: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#GrupoSimpleType(EMI,TIT,DEP,DES,OPE,TRA,length) */
        grupo: "EMI" | "TIT" | "DEP" | "DES" | "OPE" | "TRA";
    }
    export interface IarrayLeyendas {
        leyenda: RemHarinaServiceSOAPTypes.Ileyenda[];
    }
    export interface IrecepcionMercaderia {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#OrdenSimpleType(minInclusive,maxInclusive) */
        orden: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#Decimal62SimpleType(minInclusive,maxInclusive) */
        pesoNetoKG: long;
    }
    export interface IarrayMercaderiaPerdida {
        recepcionMercaderia: RemHarinaServiceSOAPTypes.IrecepcionMercaderia[];
    }
    export interface Icontingencia {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
        codTipoContingencia: short;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
        fecha: date;
        arrayMercaderiaPerdida: RemHarinaServiceSOAPTypes.IarrayMercaderiaPerdida;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#Texto250SimpleType(minLength,maxLength) */
        observacion: string;
    }
    export interface IarrayContingencias {
        contingencia: RemHarinaServiceSOAPTypes.Icontingencia[];
    }
    export interface IremitoOutput {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
        codRemito: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#IdReqClienteSimpleType(minInclusive,maxInclusive,fractionDigits) */
        idReqCliente: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
        cuitEmisor: long;
        remito: RemHarinaServiceSOAPTypes.Iremito;
        datosAutAFIP: RemHarinaServiceSOAPTypes.IdatosAutAFIP;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#EstadoRemitoSimpleType(length) */
        estadoRemito: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:base64Binary(undefined) */
        qr: base64Binary;
        arrayLeyendas: RemHarinaServiceSOAPTypes.IarrayLeyendas;
        arrayContingencias: RemHarinaServiceSOAPTypes.IarrayContingencias;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
        fechaAut: date;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
        fechaRec: date;
    }
    export interface Ievento {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
        codigo: short;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        descripcion: string;
    }
    export interface IcodigoDescripcion {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
        codigo: short;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        descripcion: string;
    }
    export interface IarrayObservaciones {
        codigoDescripcion: RemHarinaServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IarrayErrores {
        codigoDescripcion: RemHarinaServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IcodigoDescripcionString {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        codigo: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:string(undefined) */
        descripcion: string;
    }
    export interface IarrayErroresFormato {
        codigoDescripcionString: RemHarinaServiceSOAPTypes.IcodigoDescripcionString[];
    }
    export interface IgenerarRemitoReturn {
        remitoOutput: RemHarinaServiceSOAPTypes.IremitoOutput;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#ResultadoSimpleType(A,O,R) */
        resultado: "A" | "O" | "R";
        evento: RemHarinaServiceSOAPTypes.Ievento;
        arrayObservaciones: RemHarinaServiceSOAPTypes.IarrayObservaciones;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IoperacionReturn {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
        codRemito: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#ResultadoSimpleType(A,O,R) */
        resultado: "A" | "O" | "R";
        evento: RemHarinaServiceSOAPTypes.Ievento;
        arrayObservaciones: RemHarinaServiceSOAPTypes.IarrayObservaciones;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IemitirRemitoReturn {
        remitoOutput: RemHarinaServiceSOAPTypes.IremitoOutput;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#ResultadoSimpleType(A,O,R) */
        resultado: "A" | "O" | "R";
        evento: RemHarinaServiceSOAPTypes.Ievento;
        arrayObservaciones: RemHarinaServiceSOAPTypes.IarrayObservaciones;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayRecepcionMercaderia {
        recepcionMercaderia: RemHarinaServiceSOAPTypes.IrecepcionMercaderia[];
    }
    export interface IconsultarUltimoRemitoReturn {
        remitoOutput: RemHarinaServiceSOAPTypes.IremitoOutput;
        evento: RemHarinaServiceSOAPTypes.Ievento;
        arrayObservaciones: RemHarinaServiceSOAPTypes.IarrayObservaciones;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IconsultarRemitoReturn {
        remitoOutput: RemHarinaServiceSOAPTypes.IremitoOutput;
        evento: RemHarinaServiceSOAPTypes.Ievento;
        arrayObservaciones: RemHarinaServiceSOAPTypes.IarrayObservaciones;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayDomicilios {
        codigoDescripcion: RemHarinaServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IconsultarCodigosDomicilioReturn {
        arrayDomicilios: RemHarinaServiceSOAPTypes.IarrayDomicilios;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayPuntosEmision {
        codigoDescripcion: RemHarinaServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IconsultarPuntosEmisionReturn {
        arrayPuntosEmision: RemHarinaServiceSOAPTypes.IarrayPuntosEmision;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IrangoFecha {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
        fechaDesde: date;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
        fechaHasta: date;
    }
    export interface IinfoRemito {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
        cuitEmisor: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
        codRemito: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#PuntoEmisionSimpleType(minInclusive,maxInclusive) */
        puntoEmision: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
        tipoCmp: short;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#NumeroRemitoSimpleType(minInclusive,maxInclusive) */
        nroRemito: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#IdReqClienteSimpleType(minInclusive,maxInclusive,fractionDigits) */
        idReqCliente: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#EstadoRemitoSimpleType(length) */
        estadoActual: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
        fechaOper: date;
    }
    export interface IarrayRemitos {
        infoRemito: RemHarinaServiceSOAPTypes.IinfoRemito[];
    }
    export interface IconsultarRemitosReturn {
        arrayRemitos: RemHarinaServiceSOAPTypes.IarrayRemitos;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:short(undefined) */
        nroPagina: short;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#SiNoSimpleType(length,S,N) */
        hayMas: "S" | "N";
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface Iestados {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#EstadoRemitoSimpleType(length) */
        estado: string;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:date(undefined) */
        fecha: date;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#CuitSimpleType(minExclusive,maxInclusive) */
        cuitUsuario: long;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#Texto250SimpleType(minLength,maxLength) */
        cuitDesc: string;
    }
    export interface IarrayEstados {
        estados: RemHarinaServiceSOAPTypes.Iestados[];
    }
    export interface IestadosRemitoReturn {
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#xsd:long(undefined) */
        codRemito: long;
        arrayEstados: RemHarinaServiceSOAPTypes.IarrayEstados;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayRedestinoMercaderia {
        recepcionMercaderia: RemHarinaServiceSOAPTypes.IrecepcionMercaderia[];
    }
    export interface IregistrarRedestinoReturn {
        remitoOutput: RemHarinaServiceSOAPTypes.IremitoOutput;
        /** http://ar.gob.afip.wsremharina/RemHarinaService/#ResultadoSimpleType(A,O,R) */
        resultado: "A" | "O" | "R";
        evento: RemHarinaServiceSOAPTypes.Ievento;
        arrayObservaciones: RemHarinaServiceSOAPTypes.IarrayObservaciones;
        arrayErrores: RemHarinaServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: RemHarinaServiceSOAPTypes.IarrayErroresFormato;
    }
}
