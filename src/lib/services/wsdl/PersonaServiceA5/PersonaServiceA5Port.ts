type long = number;
type int = number;
type dateTime = Date;

export interface IgetPersonaInput {
    /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
    token: string;
    /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
    sign: string;
    /** http://a5.soap.ws.server.puc.sr/#xs:long(undefined) */
    cuitRepresentada: long;
    /** http://a5.soap.ws.server.puc.sr/#xs:long(undefined) */
    idPersona: long;
}

export interface IgetPersonaOutput {
    personaReturn: PersonaServiceA5PortTypes.IpersonaReturn;
}

export interface IdummyInput { }

export interface IdummyOutput {
    return: PersonaServiceA5PortTypes.Ireturn;
}

export interface IPersonaServiceA5PortSoap {
    getPersona: (input: IgetPersonaInput, cb: (err: any | null, result: IgetPersonaOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    dummy: (input: IdummyInput, cb: (err: any | null, result: IdummyOutput, raw: string, soapHeader: { [k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
}

export namespace PersonaServiceA5PortTypes {
    export interface Idependencia {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        codPostal: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        descripcionDependencia: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        descripcionProvincia: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        direccion: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        idDependencia: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        idProvincia: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        localidad: string;
    }
    export interface IdomicilioFiscal {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        codPostal: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        datoAdicional: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        descripcionProvincia: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        direccion: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        idProvincia: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        localidad: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        tipoDatoAdicional: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        tipoDomicilio: string;
    }
    export interface IdatosGenerales {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        apellido: string;
        dependencia: PersonaServiceA5PortTypes.Idependencia;
        domicilioFiscal: PersonaServiceA5PortTypes.IdomicilioFiscal;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        estadoClave: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:dateTime(undefined) */
        fechaContratoSocial: dateTime;
        /** http://a5.soap.ws.server.puc.sr/#xs:long(undefined) */
        idPersona: long;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        mesCierre: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        nombre: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        razonSocial: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        tipoClave: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        tipoPersona: string;
    }
    export interface IactividadMonotributista {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        descripcionActividad: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:long(undefined) */
        idActividad: long;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        nomenclador: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        orden: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        periodo: int;
    }
    export interface IcategoriaMonotributo {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        descripcionCategoria: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        idCategoria: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        idImpuesto: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        periodo: int;
    }
    export interface IcomponenteDeSociedad {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        apellidoPersonaAsociada: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:dateTime(undefined) */
        ffRelacion: dateTime;
        /** http://a5.soap.ws.server.puc.sr/#xs:dateTime(undefined) */
        ffVencimiento: dateTime;
        /** http://a5.soap.ws.server.puc.sr/#xs:long(undefined) */
        idPersonaAsociada: long;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        nombrePersonaAsociada: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        razonSocialPersonaAsociada: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        tipoComponente: string;
    }
    export interface Iimpuesto {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        descripcionImpuesto: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        idImpuesto: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        periodo: int;
    }
    export interface IdatosMonotributo {
        actividadMonotributista: PersonaServiceA5PortTypes.IactividadMonotributista;
        categoriaMonotributo: PersonaServiceA5PortTypes.IcategoriaMonotributo;
        componenteDeSociedad: PersonaServiceA5PortTypes.IcomponenteDeSociedad[];
        impuesto: PersonaServiceA5PortTypes.Iimpuesto[];
    }
    export interface Iactividad {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        descripcionActividad: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:long(undefined) */
        idActividad: long;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        nomenclador: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        orden: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        periodo: int;
    }
    export interface IcategoriaAutonomo {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        descripcionCategoria: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        idCategoria: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        idImpuesto: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        periodo: int;
    }
    export interface Iregimen {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        descripcionRegimen: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        idImpuesto: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        idRegimen: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:int(undefined) */
        periodo: int;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        tipoRegimen: string;
    }
    export interface IdatosRegimenGeneral {
        actividad: PersonaServiceA5PortTypes.Iactividad[];
        categoriaAutonomo: PersonaServiceA5PortTypes.IcategoriaAutonomo;
        impuesto: PersonaServiceA5PortTypes.Iimpuesto[];
        regimen: PersonaServiceA5PortTypes.Iregimen[];
    }
    export interface IerrorConstancia {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        apellido: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        error: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:long(undefined) */
        idPersona: long;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        nombre: string;
    }
    export interface IerrorMonotributo {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        error: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        mensaje: string;
    }
    export interface IerrorRegimenGeneral {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        error: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        mensaje: string;
    }
    export interface Imetadata {
        /** http://a5.soap.ws.server.puc.sr/#xs:dateTime(undefined) */
        fechaHora: dateTime;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        servidor: string;
    }
    export interface IpersonaReturn {
        datosGenerales: PersonaServiceA5PortTypes.IdatosGenerales;
        datosMonotributo: PersonaServiceA5PortTypes.IdatosMonotributo;
        datosRegimenGeneral: PersonaServiceA5PortTypes.IdatosRegimenGeneral;
        errorConstancia: PersonaServiceA5PortTypes.IerrorConstancia;
        errorMonotributo: PersonaServiceA5PortTypes.IerrorMonotributo;
        errorRegimenGeneral: PersonaServiceA5PortTypes.IerrorRegimenGeneral;
        metadata: PersonaServiceA5PortTypes.Imetadata;
    }
    export interface Ireturn {
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        appserver: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        authserver: string;
        /** http://a5.soap.ws.server.puc.sr/#xs:string(undefined) */
        dbserver: string;
    }
}
