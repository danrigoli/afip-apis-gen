type LpgCuitType = number;
type long = number;
type float = number;
type int = number;
type decimal = number;
type dateTime = Date;
type date = Date;
type base64Binary = string;
export interface IdummyInput {}

export interface IdummyOutput {
    return: LpgEndPointTypes.Ireturn;
}

export interface IliquidacionAutorizarInput {
    auth: LpgEndPointTypes.Iauth;
    liquidacion: {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
        ptoEmision: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        nroOrden: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
        numeroContrato: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitComprador: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgActividadType(maxInclusive,minExclusive) */
        nroActComprador: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
        nroIngBrutoComprador: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoOperacionType(minLength,maxLength) */
        codTipoOperacion: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
        esLiquidacionPropia: "S" | "N";
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgEsCanjeType(P,T,N) */
        esCanje: "P" | "T" | "N";
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodPuertoType(minExclusive,maxInclusive) */
        codPuerto: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDesPuertoLocalidadType(maxLength) */
        desPuertoLocalidad: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
        codGrano: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
        pesoNetoSinCertificado: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
        codLocalidadProcedenciaSinCertificado: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
        codProvProcedenciaSinCertificado: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitVendedor: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
        nroIngBrutoVendedor: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
        actuaCorredor: "S" | "N";
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
        liquidaCorredor: "S" | "N";
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitCorredor: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPorcType(fractionDigits,minInclusive,maxInclusive) */
        comisionCorredor: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
        nroIngBrutoCorredor: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
        fechaPrecioOperacion: date;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioRefTnType(fractionDigits,maxInclusive,minInclusive) */
        precioRefTn: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoCodigoType(maxLength) */
        codGradoRef: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoCodigoType(maxLength) */
        codGradoEnt: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoValorType(fractionDigits,maxInclusive,minExclusive) */
        valGradoEnt: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgFactorEntType(fractionDigits,minExclusive,maxInclusive) */
        factorEnt: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioFleteTnType(fractionDigits,maxInclusive,minInclusive) */
        precioFleteTn: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgContProteicoType(fractionDigits,maxInclusive,minInclusive) */
        contProteico: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
        alicIvaOperacion: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
        campaniaPPal: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
        codLocalidadProcedencia: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
        codProvProcedencia: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
        certificados: {
            certificado: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTipoCertificadoDepType(maxLength) */
                tipoCertificadoDeposito: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroCertDepType(maxInclusive,minExclusive) */
                nroCertificadoDeposito: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                pesoNeto: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                pesoNetoTotalCertificado: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
                codLocalidadProcedencia: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
                codProvProcedencia: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
                campania: long;
                /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
                fechaCierre: date;
            }>;
        };
        opcionales: LpgEndPointTypes.Iopcionales;
    };
    deducciones: {
        deduccion: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodConceptoType(maxLength) */
            codigoConcepto: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDetalleDeduccionType(minLength,maxLength) */
            detalleAclaratorio: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDiasAlmacenajeType(maxInclusive,minInclusive) */
            diasAlmacenaje: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioKgDiarioType(fractionDigits,maxInclusive,minInclusive) */
            precioPKGdiario: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgComisionGastosAdmType(fractionDigits,maxInclusive,minInclusive) */
            comisionGastosAdm: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgBaseCalculoType(fractionDigits,maxInclusive,minInclusive) */
            baseCalculo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicuotaIva: decimal;
        }>;
    };
    retenciones: {
        retencion: LpgEndPointTypes.Iretencion[];
    };
    percepciones: {
        percepcion: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
            descripcion: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeFinal: decimal;
        }>;
    };
}

export interface IliquidacionAutorizarOutput {
    liqReturn: LpgEndPointTypes.IliqReturn;
}

export interface IprovinciasConsultarInput {
    auth: LpgEndPointTypes.Iauth;
}

export interface IprovinciasConsultarOutput {
    provinciasReturn: LpgEndPointTypes.IprovinciasReturn;
}

export interface IlocalidadXProvinciaConsultarInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
    codProvincia: string;
}

export interface IlocalidadXProvinciaConsultarOutput {
    localidadesReturn: LpgEndPointTypes.IlocalidadesReturn;
}

export interface ItipoOperacionXActividadConsultarInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    nroActLiquida: long;
}

export interface ItipoOperacionXActividadConsultarOutput {
    tipoOperacionReturn: LpgEndPointTypes.ItipoOperacionReturn;
}

export interface IpuertoConsultarInput {
    auth: LpgEndPointTypes.Iauth;
}

export interface IpuertoConsultarOutput {
    puertoReturn: LpgEndPointTypes.IpuertoReturn;
}

export interface ItipoActividadConsultarInput {
    auth: LpgEndPointTypes.Iauth;
}

export interface ItipoActividadConsultarOutput {
    tipoActividadReturn: LpgEndPointTypes.ItipoActividadReturn;
}

export interface ItipoActividadRepresentadoConsultarInput {
    auth: LpgEndPointTypes.Iauth;
}

export interface ItipoActividadRepresentadoConsultarOutput {
    tipoActividadReturn: LpgEndPointTypes.ItipoActividadReturn;
}

export interface ItipoCertificadoDepositoConsultarInput {
    auth: LpgEndPointTypes.Iauth;
}

export interface ItipoCertificadoDepositoConsultarOutput {
    tipoCertDepReturn: LpgEndPointTypes.ItipoCertDepReturn;
}

export interface ItipoRetencionConsultarInput {
    auth: LpgEndPointTypes.Iauth;
}

export interface ItipoRetencionConsultarOutput {
    tipoRetencionReturn: LpgEndPointTypes.ItipoRetencionReturn;
}

export interface ItipoDeduccionConsultarInput {
    auth: LpgEndPointTypes.Iauth;
}

export interface ItipoDeduccionConsultarOutput {
    tipoDeduccionReturn: LpgEndPointTypes.ItipoDeduccionReturn;
}

export interface ItipoGranoConsultarInput {
    auth: LpgEndPointTypes.Iauth;
}

export interface ItipoGranoConsultarOutput {
    tipoGranoReturn: LpgEndPointTypes.ItipoGranoReturn;
}

export interface IcodigoGradoReferenciaConsultarInput {
    auth: LpgEndPointTypes.Iauth;
}

export interface IcodigoGradoReferenciaConsultarOutput {
    gradoRefReturn: LpgEndPointTypes.IgradoRefReturn;
}

export interface IcodigoGradoEntregadoXTipoGranoConsultarInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
    codGrano: long;
}

export interface IcodigoGradoEntregadoXTipoGranoConsultarOutput {
    gradoEntReturn: LpgEndPointTypes.IgradoEntReturn;
}

export interface IcampaniasConsultarInput {
    auth: LpgEndPointTypes.Iauth;
}

export interface IcampaniasConsultarOutput {
    campaniaReturn: LpgEndPointTypes.IcampaniaReturn;
}

export interface IliquidacionXCoeConsultarInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
    pdf: "S" | "N";
}

export interface IliquidacionXCoeConsultarOutput {
    liqConsReturn: LpgEndPointTypes.IliqConsReturn;
}

export interface IliquidacionXNroOrdenConsultarInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
    ptoEmision: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    nroOrden: long;
}

export interface IliquidacionXNroOrdenConsultarOutput {
    liqConsReturn: LpgEndPointTypes.IliqConsReturn;
}

export interface IliquidacionUltimoNroOrdenConsultarInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
    ptoEmision: long;
}

export interface IliquidacionUltimoNroOrdenConsultarOutput {
    liqUltNroOrdenReturn: LpgEndPointTypes.IliqUltNroOrdenReturn;
}

export interface IliquidacionAnularInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
}

export interface IliquidacionAnularOutput {
    anulacionReturn: LpgEndPointTypes.IanulacionReturn;
}

export interface IliquidacionAjustarUnificadoInput {
    auth: LpgEndPointTypes.Iauth;
    ajusteBase: {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
        ptoEmision: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        nroOrden: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coeAjustado: long;
        certificados: {
            certificado: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTipoCertificadoDepType(maxLength) */
                tipoCertificadoDeposito: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroCertDepType(maxInclusive,minExclusive) */
                nroCertificadoDeposito: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                pesoNeto: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                pesoNetoTotalCertificado: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
                codLocalidadProcedencia: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
                codProvProcedencia: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
                campania: long;
                /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
                fechaCierre: date;
            }>;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
        codLocalidad: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
        codProv: long;
        fusion: LpgEndPointTypes.Ifusion;
    };
    ajusteCredito: {
        certificados: {
            certificado: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
                coe: long;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                pesoAjustado: number;
            }>;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDiferenciaPesoNetoType(minInclusive,maxExclusive) */
        diferenciaPesoNeto: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioRefTnType(fractionDigits,maxInclusive,minInclusive) */
        diferenciaPrecioOperacion: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoCodigoType(maxLength) */
        codGrado: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoValorType(fractionDigits,maxInclusive,minExclusive) */
        valGrado: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgFactorEntType(fractionDigits,minExclusive,maxInclusive) */
        factor: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioFleteTnType(fractionDigits,maxInclusive,minInclusive) */
        diferenciaPrecioFleteTn: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
        opcionales: LpgEndPointTypes.Iopcionales;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva0: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva0: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva105: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva105: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva21: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva21: decimal;
        deducciones: {
            deduccion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodConceptoType(maxLength) */
                codigoConcepto: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDetalleDeduccionType(minLength,maxLength) */
                detalleAclaratorio: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDiasAlmacenajeType(maxInclusive,minInclusive) */
                diasAlmacenaje: long;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioKgDiarioType(fractionDigits,maxInclusive,minInclusive) */
                precioPKGdiario: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgComisionGastosAdmType(fractionDigits,maxInclusive,minInclusive) */
                comisionGastosAdm: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgBaseCalculoType(fractionDigits,maxInclusive,minInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuotaIva: decimal;
            }>;
        };
        retenciones: {
            retencion: LpgEndPointTypes.Iretencion[];
        };
    };
    ajusteDebito: {
        certificados: {
            certificado: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
                coe: long;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                pesoAjustado: number;
            }>;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDiferenciaPesoNetoType(minInclusive,maxExclusive) */
        diferenciaPesoNeto: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioRefTnType(fractionDigits,maxInclusive,minInclusive) */
        diferenciaPrecioOperacion: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoCodigoType(maxLength) */
        codGrado: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoValorType(fractionDigits,maxInclusive,minExclusive) */
        valGrado: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgFactorEntType(fractionDigits,minExclusive,maxInclusive) */
        factor: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioFleteTnType(fractionDigits,maxInclusive,minInclusive) */
        diferenciaPrecioFleteTn: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
        opcionales: LpgEndPointTypes.Iopcionales;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva0: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva0: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva105: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva105: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva21: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva21: decimal;
        deducciones: {
            deduccion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodConceptoType(maxLength) */
                codigoConcepto: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDetalleDeduccionType(minLength,maxLength) */
                detalleAclaratorio: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDiasAlmacenajeType(maxInclusive,minInclusive) */
                diasAlmacenaje: long;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioKgDiarioType(fractionDigits,maxInclusive,minInclusive) */
                precioPKGdiario: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgComisionGastosAdmType(fractionDigits,maxInclusive,minInclusive) */
                comisionGastosAdm: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgBaseCalculoType(fractionDigits,maxInclusive,minInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuotaIva: decimal;
            }>;
        };
        retenciones: {
            retencion: LpgEndPointTypes.Iretencion[];
        };
    };
}

export interface IliquidacionAjustarUnificadoOutput {
    ajusteUnifReturn: LpgEndPointTypes.IajusteUnifReturn;
}

export interface IliquidacionAjustarContratoInput {
    auth: LpgEndPointTypes.Iauth;
    ajusteBase: {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
        ptoEmision: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        nroOrden: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
        nroContrato: decimal;
        certificados: {
            certificado: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTipoCertificadoDepType(maxLength) */
                tipoCertificadoDeposito: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroCertDepType(maxInclusive,minExclusive) */
                nroCertificadoDeposito: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                pesoNeto: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                pesoNetoTotalCertificado: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
                codLocalidadProcedencia: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
                codProvProcedencia: number;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
                campania: long;
                /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
                fechaCierre: date;
            }>;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgActividadType(maxInclusive,minExclusive) */
        actividad: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
        codGrano: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitVendedor: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitCorredor: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitComprador: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioRefTnType(fractionDigits,maxInclusive,minInclusive) */
        precioRefTn: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoCodigoType(maxLength) */
        codGradoEnt: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoValorType(fractionDigits,maxInclusive,minExclusive) */
        valGradoEnt: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioFleteTnType(fractionDigits,maxInclusive,minInclusive) */
        precioFleteTn: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodPuertoType(minExclusive,maxInclusive) */
        codPuerto: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDesPuertoLocalidadType(maxLength) */
        desPuertoLocalidad: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
        codLocalidad: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
        codProv: long;
    };
    ajusteCredito: {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
        opcionales: LpgEndPointTypes.Iopcionales;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva0: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva0: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva105: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva105: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva21: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva21: decimal;
        deducciones: {
            deduccion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodConceptoType(maxLength) */
                codigoConcepto: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDetalleDeduccionType(minLength,maxLength) */
                detalleAclaratorio: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDiasAlmacenajeType(maxInclusive,minInclusive) */
                diasAlmacenaje: long;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioKgDiarioType(fractionDigits,maxInclusive,minInclusive) */
                precioPKGdiario: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgComisionGastosAdmType(fractionDigits,maxInclusive,minInclusive) */
                comisionGastosAdm: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgBaseCalculoType(fractionDigits,maxInclusive,minInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuotaIva: decimal;
            }>;
        };
        retenciones: {
            retencion: LpgEndPointTypes.Iretencion[];
        };
    };
    ajusteDebito: {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
        opcionales: LpgEndPointTypes.Iopcionales;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva0: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva0: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva105: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva105: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoImporteIva21: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustarIva21: decimal;
        deducciones: {
            deduccion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodConceptoType(maxLength) */
                codigoConcepto: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDetalleDeduccionType(minLength,maxLength) */
                detalleAclaratorio: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDiasAlmacenajeType(maxInclusive,minInclusive) */
                diasAlmacenaje: long;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioKgDiarioType(fractionDigits,maxInclusive,minInclusive) */
                precioPKGdiario: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgComisionGastosAdmType(fractionDigits,maxInclusive,minInclusive) */
                comisionGastosAdm: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgBaseCalculoType(fractionDigits,maxInclusive,minInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuotaIva: decimal;
            }>;
        };
        retenciones: {
            retencion: LpgEndPointTypes.Iretencion[];
        };
    };
}

export interface IliquidacionAjustarContratoOutput {
    ajusteContratoReturn: {
        ajusteContrato: LpgEndPointTypes.IajusteContrato;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IajusteXCoeConsultarInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
    pdf: "S" | "N";
}

export interface IajusteXCoeConsultarOutput {
    ajusteConsReturn: LpgEndPointTypes.IajusteConsReturn;
}

export interface IasociarLiquidacionAContratoInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
    nroContrato: decimal;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitComprador: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitVendedor: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitCorredor: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
    codGrano: long;
}

export interface IasociarLiquidacionAContratoOutput {
    liquidacion: {
        liquidacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
            numeroContrato: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitComprador: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgActividadType(maxInclusive,minExclusive) */
            nroActComprador: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoComprador: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoOperacionType(minLength,maxLength) */
            codTipoOperacion: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
            esLiquidacionPropia: "S" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgEsCanjeType(P,T,N) */
            esCanje: "P" | "T" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodPuertoType(minExclusive,maxInclusive) */
            codPuerto: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDesPuertoLocalidadType(maxLength) */
            desPuertoLocalidad: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
            codGrano: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
            pesoNetoSinCertificado: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
            codLocalidadProcedenciaSinCertificado: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
            codProvProcedenciaSinCertificado: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitVendedor: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoVendedor: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
            actuaCorredor: "S" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
            liquidaCorredor: "S" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitCorredor: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPorcType(fractionDigits,minInclusive,maxInclusive) */
            comisionCorredor: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoCorredor: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaPrecioOperacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioRefTnType(fractionDigits,maxInclusive,minInclusive) */
            precioRefTn: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoCodigoType(maxLength) */
            codGradoRef: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoCodigoType(maxLength) */
            codGradoEnt: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoValorType(fractionDigits,maxInclusive,minExclusive) */
            valGradoEnt: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgFactorEntType(fractionDigits,minExclusive,maxInclusive) */
            factorEnt: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioFleteTnType(fractionDigits,maxInclusive,minInclusive) */
            precioFleteTn: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgContProteicoType(fractionDigits,maxInclusive,minInclusive) */
            contProteico: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicIvaOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
            campaniaPPal: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
            codLocalidadProcedencia: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
            codProvProcedencia: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
            datosAdicionales: string;
            certificados: {
                certificado: Array<{
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTipoCertificadoDepType(maxLength) */
                    tipoCertificadoDeposito: string;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroCertDepType(maxInclusive,minExclusive) */
                    nroCertificadoDeposito: number;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                    pesoNeto: number;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                    pesoNetoTotalCertificado: number;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
                    codLocalidadProcedencia: number;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
                    codProvProcedencia: number;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
                    campania: long;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
                    fechaCierre: date;
                }>;
            };
            opcionales: LpgEndPointTypes.Iopcionales;
        };
        autorizacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoOperacionType(minLength,maxLength) */
            codTipoOperacion: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoAjusteType(minLength,maxLength) */
            codTipoAjuste: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            operacionConIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            percepciones: {
                percepcion: Array<{
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
                    descripcion: string;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:float(undefined) */
                    baseCalculo: float;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:float(undefined) */
                    alicuota: float;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
                    importeFinal: decimal;
                }>;
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPercepcion: decimal;
            deducciones: {
                deduccionReturn: LpgEndPointTypes.IdeduccionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalDeduccion: decimal;
            retenciones: {
                retencionReturn: LpgEndPointTypes.IretencionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencionAfip: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalOtrasRetenciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalIvaRg4310_18: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coe: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coeAjustado: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
            numeroContrato: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
            estado: string;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IliquidacionPorContratoConsultarInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
    nroContrato: decimal;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitComprador: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitVendedor: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitCorredor: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
    codGrano: long;
}

export interface IliquidacionPorContratoConsultarOutput {
    liqPorContratoCons: LpgEndPointTypes.IliqPorContratoCons;
}

export interface IajustePorContratoConsultarInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
    nroContrato: decimal;
}

export interface IajustePorContratoConsultarOutput {
    ajusteContratoReturn: {
        ajusteUnificado: LpgEndPointTypes.IajusteUnificado;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IajusteXNroOrdenConsultarInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
    ptoEmision: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    nroOrden: long;
}

export interface IajusteXNroOrdenConsultarOutput {
    ajusteXNroOrdenConsReturn: LpgEndPointTypes.IajusteXNroOrdenConsReturn;
}

export interface IlsgAutorizarInput {
    auth: LpgEndPointTypes.Iauth;
    liqSecundariaBase: LpgEndPointTypes.IliqSecundariaBase;
    facturaPapel: LpgEndPointTypes.IfacturaPapel;
}

export interface IlsgAutorizarOutput {
    oReturn: {
        autorizacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            operacionConIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coe: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalDeducciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPercepciones: decimal;
        };
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IlsgConsultarXCoeInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
    pdf: "S" | "N";
}

export interface IlsgConsultarXCoeOutput {
    oReturn: {
        liquidaciones: LpgEndPointTypes.Iliquidaciones[];
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IlsgConsultarXNroOrdenInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
    ptoEmision: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    nroOrden: long;
}

export interface IlsgConsultarXNroOrdenOutput {
    oReturn: {
        liquidaciones: LpgEndPointTypes.Iliquidaciones[];
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IlsgConsultarUltimoNroOrdenInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
    ptoEmision: long;
}

export interface IlsgConsultarUltimoNroOrdenOutput {
    liqUltNroOrdenReturn: LpgEndPointTypes.IliqUltNroOrdenReturn;
}

export interface IlsgAnularInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
    pdf: "S" | "N";
}

export interface IlsgAnularOutput {
    anulacionReturn: LpgEndPointTypes.IanulacionReturn;
}

export interface IlsgAjustarXCoeInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
    ptoEmision: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    nroOrden: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
    codLocalidad: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
    codProvincia: long;
    ajusteCredito: {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva0: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar0: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva10: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar10: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva21: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar21: decimal;
        percepcion: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
            detalleAclaratoria: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
            baseCalculo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicuota: decimal;
        }>;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
    };
    ajusteDebito: {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva0: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar0: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva10: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar10: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva21: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar21: decimal;
        percepcion: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
            detalleAclaratoria: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
            baseCalculo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicuota: decimal;
        }>;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
    };
    fusion: LpgEndPointTypes.Ifusion;
}

export interface IlsgAjustarXCoeOutput {
    oReturn: {
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
        ptoEmision: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        nroOrden: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
        nroContrato: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coeAjustado: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coe: long;
        ajusteCredito: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIVA: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            importe: LpgEndPointTypes.Iimporte[];
            percepcion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
                detalleAclaratoria: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuota: decimal;
            }>;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPercepcion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
        };
        ajusteDebito: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIVA: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            importe: LpgEndPointTypes.Iimporte[];
            percepcion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
                detalleAclaratoria: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuota: decimal;
            }>;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPercepcion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
        };
        totalesUnificados: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            subtotalCredDeb: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            subtotalGeneral: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            iva105: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            iva21: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            totalBasePercepciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            importeNeto: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            pagoSegunCondicion: decimal;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        estado: string;
    };
}

export interface IlsgAjustarXContratoInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
    nroContrato: decimal;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
    ptoEmision: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    nroOrden: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
    codLocalidad: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
    codProvincia: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitComprador: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitVendedor: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuit0Type(minInclusive,maxInclusive) */
    cuitCorredor: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
    codGrano: long;
    ajusteCredito: {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva0: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar0: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva10: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar10: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva21: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar21: decimal;
        percepcion: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
            detalleAclaratoria: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
            baseCalculo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicuota: decimal;
        }>;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
    };
    ajusteDebito: {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva0: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar0: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva10: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar10: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva21: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar21: decimal;
        percepcion: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
            detalleAclaratoria: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
            baseCalculo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicuota: decimal;
        }>;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
    };
}

export interface IlsgAjustarXContratoOutput {
    oReturn: {
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
        ptoEmision: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        nroOrden: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
        nroContrato: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coeAjustado: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coe: long;
        ajusteCredito: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIVA: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            importe: LpgEndPointTypes.Iimporte[];
            percepcion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
                detalleAclaratoria: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuota: decimal;
            }>;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPercepcion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
        };
        ajusteDebito: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIVA: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            importe: LpgEndPointTypes.Iimporte[];
            percepcion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
                detalleAclaratoria: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuota: decimal;
            }>;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPercepcion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
        };
        totalesUnificados: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            subtotalCredDeb: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            subtotalGeneral: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            iva105: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            iva21: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            totalBasePercepciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            importeNeto: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            pagoSegunCondicion: decimal;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        estado: string;
    };
}

export interface IlsgAsociarAContratoInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
    nroContrato: decimal;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitComprador: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitVendedor: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitCorredor: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
    codGrano: long;
}

export interface IlsgAsociarAContratoOutput {
    oReturn: {
        liquidaciones: LpgEndPointTypes.Iliquidaciones[];
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IlsgConsultarXContratoInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
    nroContrato: decimal;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitComprador: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitVendedor: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitCorredor: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
    codGrano: long;
}

export interface IlsgConsultarXContratoOutput {
    liqPorContratoCons: LpgEndPointTypes.IliqPorContratoCons;
}

export interface IcgAutorizarInput {
    auth: LpgEndPointTypes.Iauth;
    cabecera: LpgEndPointTypes.Icabecera;
    primaria: LpgEndPointTypes.Iprimaria;
    retiroTransferencia: LpgEndPointTypes.IretiroTransferencia;
    preexistente: LpgEndPointTypes.Ipreexistente;
    preexistenteFusion: LpgEndPointTypes.IpreexistenteFusion;
}

export interface IcgAutorizarOutput {
    oReturn: {
        autorizacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coe: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgEstadoCertificadoType(AC,PA,AN) */
            estado: "AC" | "PA" | "AN";
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaCertificacion: date;
            pesosResumen: LpgEndPointTypes.IpesosResumen;
            serviciosResumen: LpgEndPointTypes.IserviciosResumen;
            planta: LpgEndPointTypes.Iplanta;
        };
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IcgBuscarCtgInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#CgTipoCertificadoType(P,R,T,E) */
    tipoCertificado: "P" | "R" | "T" | "E";
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitDepositante: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_6_0_Type(minExclusive,maxInclusive) */
    nroPlanta: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
    codGrano: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
    campania: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_0_Type(minExclusive,maxInclusive) */
    nroCtg: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#CgTipoCtgType(minLength,maxLength,CTG,FC) */
    tipoCtg: "CTG" | "FC";
    /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_9_0_Type(minExclusive,maxInclusive) */
    nroCartaPorte: number;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
    fechaConfirmacionCtgDes: date;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
    fechaConfirmacionCtgHas: date;
}

export interface IcgBuscarCtgOutput {
    oReturn: {
        ctg: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
            campania: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_6_0_Type(minExclusive,maxInclusive) */
            nroPlanta: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_0_Type(minExclusive,maxInclusive) */
            nroCtg: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#CgTipoCtgType(minLength,maxLength,CTG,FC) */
            tipoCtg: "CTG" | "FC";
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
            nroCartaPorte: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
            kilosConfirmados: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaConfirmacionCtg: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
            codGrano: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitRemitenteComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitLiquida: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitCertifica: long;
        }>;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IcgBuscarCertConSaldoDisponibleInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
    cuitDepositante: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
    codGrano: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
    campania: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
    fechaEmisionDes: date;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
    fechaEmisionHas: date;
}

export interface IcgBuscarCertConSaldoDisponibleOutput {
    oReturn: {
        certificado: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coe: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#CgTipoCertificadoType(P,R,T,E) */
            tipoCertificado: "P" | "R" | "T" | "E";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
            campania: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitDepositante: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitDepositario: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_6_0_Type(minExclusive,maxInclusive) */
            nroPlanta: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
            kilosDisponibles: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
            codGrano: long;
        }>;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IcgConsultarUltimoNroOrdenInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
    ptoEmision: long;
}

export interface IcgConsultarUltimoNroOrdenOutput {
    liqUltNroOrdenReturn: LpgEndPointTypes.IliqUltNroOrdenReturn;
}

export interface IcgSolicitarAnulacionInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
    pdf: "S" | "N";
}

export interface IcgSolicitarAnulacionOutput {
    oReturn: {
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgEstadoCertificadoType(AC,PA,AN) */
        estadoCertificado: "AC" | "PA" | "AN";
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
    };
}

export interface IcgConfirmarAnulacionInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
    pdf: "S" | "N";
}

export interface IcgConfirmarAnulacionOutput {
    oReturn: {
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgEstadoCertificadoType(AC,PA,AN) */
        estadoCertificado: "AC" | "PA" | "AN";
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
    };
}

export interface IcgConsultarXCoeInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
    pdf: "S" | "N";
}

export interface IcgConsultarXCoeOutput {
    oReturn: {
        autorizacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coe: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgEstadoCertificadoType(AC,PA,AN) */
            estado: "AC" | "PA" | "AN";
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaCertificacion: date;
            pesosResumen: LpgEndPointTypes.IpesosResumen;
            serviciosResumen: LpgEndPointTypes.IserviciosResumen;
            planta: LpgEndPointTypes.Iplanta;
        };
        cabecera: LpgEndPointTypes.Icabecera;
        primaria: LpgEndPointTypes.Iprimaria;
        retiroTransferencia: LpgEndPointTypes.IretiroTransferencia;
        preexistente: LpgEndPointTypes.Ipreexistente;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_6_0_Type(minExclusive,maxInclusive) */
        nroPlanta: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitDepositario: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
        alicuotaIVA: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitRemitenteComercial: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
        codLocalidad: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
        codProvincia: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        kilosDisponible: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IcgConsultarXNroOrdenInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
    ptoEmision: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    nroOrden: long;
}

export interface IcgConsultarXNroOrdenOutput {
    oReturn: {
        autorizacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coe: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgEstadoCertificadoType(AC,PA,AN) */
            estado: "AC" | "PA" | "AN";
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaCertificacion: date;
            pesosResumen: LpgEndPointTypes.IpesosResumen;
            serviciosResumen: LpgEndPointTypes.IserviciosResumen;
            planta: LpgEndPointTypes.Iplanta;
        };
        cabecera: LpgEndPointTypes.Icabecera;
        primaria: LpgEndPointTypes.Iprimaria;
        retiroTransferencia: LpgEndPointTypes.IretiroTransferencia;
        preexistente: LpgEndPointTypes.Ipreexistente;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_6_0_Type(minExclusive,maxInclusive) */
        nroPlanta: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitDepositario: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
        alicuotaIVA: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitRemitenteComercial: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
        codLocalidad: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
        codProvincia: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        kilosDisponible: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IcgInformarCalidadInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    calidad: LpgEndPointTypes.Icalidad;
}

export interface IcgInformarCalidadOutput {
    oReturn: {
        autorizacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coe: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgEstadoCertificadoType(AC,PA,AN) */
            estado: "AC" | "PA" | "AN";
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaCertificacion: date;
            pesosResumen: LpgEndPointTypes.IpesosResumen;
            serviciosResumen: LpgEndPointTypes.IserviciosResumen;
            planta: LpgEndPointTypes.Iplanta;
        };
        cabecera: LpgEndPointTypes.Icabecera;
        primaria: LpgEndPointTypes.Iprimaria;
        retiroTransferencia: LpgEndPointTypes.IretiroTransferencia;
        preexistente: LpgEndPointTypes.Ipreexistente;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_6_0_Type(minExclusive,maxInclusive) */
        nroPlanta: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitDepositario: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
        alicuotaIVA: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitRemitenteComercial: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
        codLocalidad: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
        codProvincia: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        kilosDisponible: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    };
}

export interface IlpgAutorizarAnticipoInput {
    auth: LpgEndPointTypes.Iauth;
    anticipo: LpgEndPointTypes.Ianticipo;
}

export interface IlpgAutorizarAnticipoOutput {
    liqReturn: LpgEndPointTypes.IliqReturn;
}

export interface IlpgCancelarAnticipoInput {
    auth: LpgEndPointTypes.Iauth;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    coe: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
    ptoEmision: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
    nroOrden: long;
    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
    pdf: "S" | "N";
}

export interface IlpgCancelarAnticipoOutput {
    liqConsReturn: LpgEndPointTypes.IliqConsReturn;
}

export interface ILpgEndPointSoap {
    dummy: (input: IdummyInput, cb: (err: any | null, result: IdummyOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    liquidacionAutorizar: (input: IliquidacionAutorizarInput, cb: (err: any | null, result: IliquidacionAutorizarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    provinciasConsultar: (input: IprovinciasConsultarInput, cb: (err: any | null, result: IprovinciasConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    localidadXProvinciaConsultar: (input: IlocalidadXProvinciaConsultarInput, cb: (err: any | null, result: IlocalidadXProvinciaConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    tipoOperacionXActividadConsultar: (input: ItipoOperacionXActividadConsultarInput, cb: (err: any | null, result: ItipoOperacionXActividadConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    puertoConsultar: (input: IpuertoConsultarInput, cb: (err: any | null, result: IpuertoConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    tipoActividadConsultar: (input: ItipoActividadConsultarInput, cb: (err: any | null, result: ItipoActividadConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    tipoActividadRepresentadoConsultar: (input: ItipoActividadRepresentadoConsultarInput, cb: (err: any | null, result: ItipoActividadRepresentadoConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    tipoCertificadoDepositoConsultar: (input: ItipoCertificadoDepositoConsultarInput, cb: (err: any | null, result: ItipoCertificadoDepositoConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    tipoRetencionConsultar: (input: ItipoRetencionConsultarInput, cb: (err: any | null, result: ItipoRetencionConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    tipoDeduccionConsultar: (input: ItipoDeduccionConsultarInput, cb: (err: any | null, result: ItipoDeduccionConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    tipoGranoConsultar: (input: ItipoGranoConsultarInput, cb: (err: any | null, result: ItipoGranoConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    codigoGradoReferenciaConsultar: (input: IcodigoGradoReferenciaConsultarInput, cb: (err: any | null, result: IcodigoGradoReferenciaConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    codigoGradoEntregadoXTipoGranoConsultar: (input: IcodigoGradoEntregadoXTipoGranoConsultarInput, cb: (err: any | null, result: IcodigoGradoEntregadoXTipoGranoConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    campaniasConsultar: (input: IcampaniasConsultarInput, cb: (err: any | null, result: IcampaniasConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    liquidacionXCoeConsultar: (input: IliquidacionXCoeConsultarInput, cb: (err: any | null, result: IliquidacionXCoeConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    liquidacionXNroOrdenConsultar: (input: IliquidacionXNroOrdenConsultarInput, cb: (err: any | null, result: IliquidacionXNroOrdenConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    liquidacionUltimoNroOrdenConsultar: (input: IliquidacionUltimoNroOrdenConsultarInput, cb: (err: any | null, result: IliquidacionUltimoNroOrdenConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    liquidacionAnular: (input: IliquidacionAnularInput, cb: (err: any | null, result: IliquidacionAnularOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    liquidacionAjustarUnificado: (input: IliquidacionAjustarUnificadoInput, cb: (err: any | null, result: IliquidacionAjustarUnificadoOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    liquidacionAjustarContrato: (input: IliquidacionAjustarContratoInput, cb: (err: any | null, result: IliquidacionAjustarContratoOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    ajusteXCoeConsultar: (input: IajusteXCoeConsultarInput, cb: (err: any | null, result: IajusteXCoeConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    asociarLiquidacionAContrato: (input: IasociarLiquidacionAContratoInput, cb: (err: any | null, result: IasociarLiquidacionAContratoOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    liquidacionPorContratoConsultar: (input: IliquidacionPorContratoConsultarInput, cb: (err: any | null, result: IliquidacionPorContratoConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    ajustePorContratoConsultar: (input: IajustePorContratoConsultarInput, cb: (err: any | null, result: IajustePorContratoConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    ajusteXNroOrdenConsultar: (input: IajusteXNroOrdenConsultarInput, cb: (err: any | null, result: IajusteXNroOrdenConsultarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lsgAutorizar: (input: IlsgAutorizarInput, cb: (err: any | null, result: IlsgAutorizarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lsgConsultarXCoe: (input: IlsgConsultarXCoeInput, cb: (err: any | null, result: IlsgConsultarXCoeOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lsgConsultarXNroOrden: (input: IlsgConsultarXNroOrdenInput, cb: (err: any | null, result: IlsgConsultarXNroOrdenOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lsgConsultarUltimoNroOrden: (input: IlsgConsultarUltimoNroOrdenInput, cb: (err: any | null, result: IlsgConsultarUltimoNroOrdenOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lsgAnular: (input: IlsgAnularInput, cb: (err: any | null, result: IlsgAnularOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lsgAjustarXCoe: (input: IlsgAjustarXCoeInput, cb: (err: any | null, result: IlsgAjustarXCoeOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lsgAjustarXContrato: (input: IlsgAjustarXContratoInput, cb: (err: any | null, result: IlsgAjustarXContratoOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lsgAsociarAContrato: (input: IlsgAsociarAContratoInput, cb: (err: any | null, result: IlsgAsociarAContratoOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lsgConsultarXContrato: (input: IlsgConsultarXContratoInput, cb: (err: any | null, result: IlsgConsultarXContratoOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    cgAutorizar: (input: IcgAutorizarInput, cb: (err: any | null, result: IcgAutorizarOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    cgBuscarCtg: (input: IcgBuscarCtgInput, cb: (err: any | null, result: IcgBuscarCtgOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    cgBuscarCertConSaldoDisponible: (input: IcgBuscarCertConSaldoDisponibleInput, cb: (err: any | null, result: IcgBuscarCertConSaldoDisponibleOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    cgConsultarUltimoNroOrden: (input: IcgConsultarUltimoNroOrdenInput, cb: (err: any | null, result: IcgConsultarUltimoNroOrdenOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    cgSolicitarAnulacion: (input: IcgSolicitarAnulacionInput, cb: (err: any | null, result: IcgSolicitarAnulacionOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    cgConfirmarAnulacion: (input: IcgConfirmarAnulacionInput, cb: (err: any | null, result: IcgConfirmarAnulacionOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    cgConsultarXCoe: (input: IcgConsultarXCoeInput, cb: (err: any | null, result: IcgConsultarXCoeOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    cgConsultarXNroOrden: (input: IcgConsultarXNroOrdenInput, cb: (err: any | null, result: IcgConsultarXNroOrdenOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    cgInformarCalidad: (input: IcgInformarCalidadInput, cb: (err: any | null, result: IcgInformarCalidadOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lpgAutorizarAnticipo: (input: IlpgAutorizarAnticipoInput, cb: (err: any | null, result: IlpgAutorizarAnticipoOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
    lpgCancelarAnticipo: (input: IlpgCancelarAnticipoInput, cb: (err: any | null, result: IlpgCancelarAnticipoOutput, raw: string,  soapHeader: {[k: string]: any }) => any, options?: any, extraHeaders?: any) => void;
}

export namespace LpgEndPointTypes {
    export interface Ireturn {
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        appserver: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        authserver: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        dbserver: string;
    }
    export interface Iauth {
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        token: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        sign: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuit: LpgCuitType;
    }
    export interface Iopcional {
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        codigo: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        descripcion: string;
    }
    export interface Iopcionales {
        opcional: LpgEndPointTypes.Iopcional[];
    }
    export interface Iretencion {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodConceptoType(maxLength) */
        codigoConcepto: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDetalleRetencionType(minLength,maxLength) */
        detalleAclaratorio: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgBaseCalculoType(fractionDigits,maxInclusive,minInclusive) */
        baseCalculo: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
        alicuota: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroCertRetType(minInclusive,maxInclusive) */
        nroCertificadoRetencion: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
        fechaCertificadoRetencion: date;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
        importeCertificadoRetencion: decimal;
    }
    export interface IdeduccionReturn {
        deduccion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodConceptoType(maxLength) */
            codigoConcepto: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDetalleDeduccionType(minLength,maxLength) */
            detalleAclaratorio: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDiasAlmacenajeType(maxInclusive,minInclusive) */
            diasAlmacenaje: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioKgDiarioType(fractionDigits,maxInclusive,minInclusive) */
            precioPKGdiario: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgComisionGastosAdmType(fractionDigits,maxInclusive,minInclusive) */
            comisionGastosAdm: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgBaseCalculoType(fractionDigits,maxInclusive,minInclusive) */
            baseCalculo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicuotaIva: decimal;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
        importeIva: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
        importeDeduccion: decimal;
    }
    export interface IretencionReturn {
        retencion: LpgEndPointTypes.Iretencion;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
        importeRetencion: decimal;
    }
    export interface Ierror {
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        codigo: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        descripcion: string;
    }
    export interface Ierrores {
        error: LpgEndPointTypes.Ierror[];
    }
    export interface IerroresFormato {
        error: LpgEndPointTypes.Ierror[];
    }
    export interface Ievento {
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        codigo: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        descripcion: string;
    }
    export interface Ieventos {
        evento: LpgEndPointTypes.Ievento[];
    }
    export interface IliqReturn {
        autorizacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoOperacionType(minLength,maxLength) */
            codTipoOperacion: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoAjusteType(minLength,maxLength) */
            codTipoAjuste: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            operacionConIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            percepciones: {
                percepcion: Array<{
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
                    descripcion: string;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:float(undefined) */
                    baseCalculo: float;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:float(undefined) */
                    alicuota: float;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
                    importeFinal: decimal;
                }>;
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPercepcion: decimal;
            deducciones: {
                deduccionReturn: LpgEndPointTypes.IdeduccionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalDeduccion: decimal;
            retenciones: {
                retencionReturn: LpgEndPointTypes.IretencionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencionAfip: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalOtrasRetenciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalIvaRg4310_18: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coe: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coeAjustado: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
            numeroContrato: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
            estado: string;
        };
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface IcodigoDescripcion {
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        codigo: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        descripcion: string;
    }
    export interface Iprovincias {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface IprovinciasReturn {
        provincias: LpgEndPointTypes.Iprovincias;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface Ilocalidades {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface IlocalidadesReturn {
        localidades: LpgEndPointTypes.Ilocalidades;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface ItiposOperacion {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface ItipoOperacionReturn {
        tiposOperacion: LpgEndPointTypes.ItiposOperacion;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface Ipuertos {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface IpuertoReturn {
        puertos: LpgEndPointTypes.Ipuertos;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface ItiposActividad {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface ItipoActividadReturn {
        tiposActividad: LpgEndPointTypes.ItiposActividad;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface ItiposCertDep {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface ItipoCertDepReturn {
        tiposCertDep: LpgEndPointTypes.ItiposCertDep;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface ItiposRetencion {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface ItipoRetencionReturn {
        tiposRetencion: LpgEndPointTypes.ItiposRetencion;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface ItiposDeduccion {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface ItipoDeduccionReturn {
        tiposDeduccion: LpgEndPointTypes.ItiposDeduccion;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface Igranos {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface ItipoGranoReturn {
        granos: LpgEndPointTypes.Igranos;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface IgradosRef {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface IgradoRefReturn {
        gradosRef: LpgEndPointTypes.IgradosRef;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface IgradoEntReturn {
        gradoEnt: {
            gradoEnt: Array<{
                codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion;
                /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:decimal(undefined) */
                valor: decimal;
            }>;
        };
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface Icampanias {
        codigoDescripcion: LpgEndPointTypes.IcodigoDescripcion[];
    }
    export interface IcampaniaReturn {
        campanias: LpgEndPointTypes.Icampanias;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface IliqConsReturn {
        liquidacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
            numeroContrato: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitComprador: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgActividadType(maxInclusive,minExclusive) */
            nroActComprador: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoComprador: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoOperacionType(minLength,maxLength) */
            codTipoOperacion: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
            esLiquidacionPropia: "S" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgEsCanjeType(P,T,N) */
            esCanje: "P" | "T" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodPuertoType(minExclusive,maxInclusive) */
            codPuerto: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDesPuertoLocalidadType(maxLength) */
            desPuertoLocalidad: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
            codGrano: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
            pesoNetoSinCertificado: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
            codLocalidadProcedenciaSinCertificado: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
            codProvProcedenciaSinCertificado: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitVendedor: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoVendedor: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
            actuaCorredor: "S" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
            liquidaCorredor: "S" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitCorredor: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPorcType(fractionDigits,minInclusive,maxInclusive) */
            comisionCorredor: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoCorredor: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaPrecioOperacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioRefTnType(fractionDigits,maxInclusive,minInclusive) */
            precioRefTn: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoCodigoType(maxLength) */
            codGradoRef: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoCodigoType(maxLength) */
            codGradoEnt: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoValorType(fractionDigits,maxInclusive,minExclusive) */
            valGradoEnt: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgFactorEntType(fractionDigits,minExclusive,maxInclusive) */
            factorEnt: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioFleteTnType(fractionDigits,maxInclusive,minInclusive) */
            precioFleteTn: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgContProteicoType(fractionDigits,maxInclusive,minInclusive) */
            contProteico: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicIvaOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
            campaniaPPal: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
            codLocalidadProcedencia: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
            codProvProcedencia: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
            datosAdicionales: string;
            certificados: {
                certificado: Array<{
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTipoCertificadoDepType(maxLength) */
                    tipoCertificadoDeposito: string;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroCertDepType(maxInclusive,minExclusive) */
                    nroCertificadoDeposito: number;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                    pesoNeto: number;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
                    pesoNetoTotalCertificado: number;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
                    codLocalidadProcedencia: number;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
                    codProvProcedencia: number;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
                    campania: long;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
                    fechaCierre: date;
                }>;
            };
            opcionales: LpgEndPointTypes.Iopcionales;
        };
        autorizacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoOperacionType(minLength,maxLength) */
            codTipoOperacion: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoAjusteType(minLength,maxLength) */
            codTipoAjuste: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            operacionConIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            percepciones: {
                percepcion: Array<{
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
                    descripcion: string;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:float(undefined) */
                    baseCalculo: float;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:float(undefined) */
                    alicuota: float;
                    /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
                    importeFinal: decimal;
                }>;
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPercepcion: decimal;
            deducciones: {
                deduccionReturn: LpgEndPointTypes.IdeduccionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalDeduccion: decimal;
            retenciones: {
                retencionReturn: LpgEndPointTypes.IretencionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencionAfip: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalOtrasRetenciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalIvaRg4310_18: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coe: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coeAjustado: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
            numeroContrato: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
            estado: string;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface IliqUltNroOrdenReturn {
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        nroOrden: long;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface IanulacionReturn {
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coe: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        resultado: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface Ifusion {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
        nroIngBrutos: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgActividadType(maxInclusive,minExclusive) */
        nroactividad: long;
    }
    export interface IimporteReturn {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
        importe: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        concepto: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
        alicuota: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
        ivaCalculado: decimal;
    }
    export interface Iimportes {
        importeReturn: LpgEndPointTypes.IimporteReturn[];
    }
    export interface IajusteUnificado {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
        ptoEmision: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        nroOrden: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
        nroContrato: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coeAjustado: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoOperacionType(minLength,maxLength) */
        codTipoOperacion: string;
        ajusteCredito: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            operacionConIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            importes: LpgEndPointTypes.Iimportes;
            deducciones: {
                deduccionReturn: LpgEndPointTypes.IdeduccionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalDeduccion: decimal;
            retenciones: {
                retencionReturn: LpgEndPointTypes.IretencionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencionAfip: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalOtrasRetenciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalIvaRg4310_18: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
        };
        ajusteDebito: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            operacionConIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            importes: LpgEndPointTypes.Iimportes;
            deducciones: {
                deduccionReturn: LpgEndPointTypes.IdeduccionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalDeduccion: decimal;
            retenciones: {
                retencionReturn: LpgEndPointTypes.IretencionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencionAfip: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalOtrasRetenciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalIvaRg4310_18: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
        };
        totalesUnificados: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            subTotalDebCred: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            totalBaseDeducciones: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            subtotalGeneral: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            ivaDeducciones: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            iva105: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            iva21: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            retencionesGanancias: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            retencionesIVA: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            importeOtrasRetenciones: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            importeNeto: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            ivaRG4310_18: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            pagoSCondicion: number;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coe: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        estado: string;
    }
    export interface IajusteUnifReturn {
        ajusteUnificado: LpgEndPointTypes.IajusteUnificado;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface IajusteContrato {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
        ptoEmision: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        nroOrden: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
        nroContrato: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coeAjustado: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoOperacionType(minLength,maxLength) */
        codTipoOperacion: string;
        ajusteCredito: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            operacionConIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            importes: LpgEndPointTypes.Iimportes;
            deducciones: {
                deduccionReturn: LpgEndPointTypes.IdeduccionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalDeduccion: decimal;
            retenciones: {
                retencionReturn: LpgEndPointTypes.IretencionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencionAfip: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalOtrasRetenciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalIvaRg4310_18: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
        };
        ajusteDebito: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNroOpComercialType(minInclusive,maxInclusive) */
            nroOpComercial: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            subTotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            importeIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            operacionConIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTotalPesoNetoType(maxInclusive,minInclusive) */
            totalPesoNeto: long;
            importes: LpgEndPointTypes.Iimportes;
            deducciones: {
                deduccionReturn: LpgEndPointTypes.IdeduccionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalDeduccion: decimal;
            retenciones: {
                retencionReturn: LpgEndPointTypes.IretencionReturn[];
            };
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalRetencionAfip: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalOtrasRetenciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalNetoAPagar: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalIvaRg4310_18: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalPagoSegunCondicion: decimal;
        };
        totalesUnificados: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            subTotalDebCred: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            totalBaseDeducciones: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            subtotalGeneral: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            ivaDeducciones: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            iva105: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            iva21: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            retencionesGanancias: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            retencionesIVA: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            importeOtrasRetenciones: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            importeNeto: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            ivaRG4310_18: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            pagoSCondicion: number;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coe: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        estado: string;
    }
    export interface IajusteConsReturn {
        ajusteUnificado: LpgEndPointTypes.IajusteUnificado;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface IcoeRelacionados {
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coe: long;
    }
    export interface IliqPorContratoCons {
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
        coeRelacionados: LpgEndPointTypes.IcoeRelacionados;
    }
    export interface IajusteXNroOrdenConsReturn {
        ajusteUnificado: LpgEndPointTypes.IajusteUnificado;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:base64Binary(undefined) */
        pdf: base64Binary;
        errores: LpgEndPointTypes.Ierrores;
        erroresFormato: LpgEndPointTypes.IerroresFormato;
        eventos: LpgEndPointTypes.Ieventos;
    }
    export interface IliqSecundariaBase {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
        ptoEmision: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        nroOrden: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
        numeroContrato: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitComprador: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
        nroIngBrutoComprador: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodPuertoType(minExclusive,maxInclusive) */
        codPuerto: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDesPuertoLocalidadType(maxLength) */
        desPuertoLocalidad: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
        codGrano: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_3_Type(fractionDigits,minExclusive,maxInclusive) */
        cantidadTn: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitVendedor: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgActividadType(maxInclusive,minExclusive) */
        nroActVendedor: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
        nroIngBrutoVendedor: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
        actuaCorredor: "S" | "N";
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
        liquidaCorredor: "S" | "N";
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitCorredor: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
        nroIngBrutoCorredor: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
        fechaPrecioOperacion: date;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioRefTnType(fractionDigits,maxInclusive,minInclusive) */
        precioRefTn: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_9_3_Type(minExclusive,maxInclusive) */
        precioOperacion: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
        alicIvaOperacion: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
        campaniaPPal: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
        codLocalidad: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
        codProvincia: long;
        deduccion: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
            detalleAclaratoria: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
            baseCalculo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicuotaIVA: decimal;
        }>;
        percepcion: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
            detalleAclaratoria: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
            baseCalculo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicuota: decimal;
        }>;
        opcionales: LpgEndPointTypes.Iopcionales;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
    }
    export interface IfacturaPapel {
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_14_0_Type(minExclusive,maxInclusive) */
        nroCAI: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_12_0_Type(minExclusive,maxInclusive) */
        nroFacturaPapel: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
        fechaFactura: date;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LsgTipoComprobanteFacturaType(1,34,51,63,39) */
        tipoComprobante: "1" | "34" | "51" | "63" | "39";
    }
    export interface Ireq {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva0: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar0: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva10: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar10: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        conceptoIva21: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2Type(maxExclusive,minInclusive) */
        importeAjustar21: decimal;
        percepcion: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
            detalleAclaratoria: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
            baseCalculo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicuota: decimal;
        }>;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
    }
    export interface Iajuste {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgTipoAjusteType(minLength,maxLength) */
        tipoAjuste: string;
        req: LpgEndPointTypes.Ireq;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coeAjustado: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
        codLocalidad: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
        codProvincia: long;
        totalesUnificados: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            subtotalCredDeb: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            subtotalGeneral: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            iva105: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            iva21: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            totalBasePercepciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            importeNeto: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte11_2LibreType(minExclusive,maxExclusive) */
            pagoSegunCondicion: decimal;
        };
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        estado: string;
    }
    export interface Iliquidaciones {
        liquidacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitComprador: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoComprador: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitVendedor: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgActividadType(maxInclusive,minExclusive) */
            nroActVendedor: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoVendedor: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
            actuaCorredor: "S" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
            liquidaCorredor: "S" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitCorredor: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoCorredor: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
            codGrano: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_3_Type(fractionDigits,minExclusive,maxInclusive) */
            pesoNetoEnTn: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
            campania: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaPrecioOperacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodPuertoType(minExclusive,maxInclusive) */
            codPuerto: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDesPuertoLocalidadType(maxLength) */
            descripcionPuertoLocalidad: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
            otraLocalidad: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioRefTnType(fractionDigits,maxInclusive,minInclusive) */
            precioReferenciaTn: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioRefTnType(fractionDigits,maxInclusive,minInclusive) */
            precioOperacionTn: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicuotaIvaOperacion: decimal;
            deduccion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
                detalleAclaratoria: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuotaIVA: decimal;
            }>;
            percepcion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#String_50_Type(minLength,maxLength) */
                detalleAclaratoria: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_2_Type(fractionDigits,minExclusive,maxInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuota: decimal;
            }>;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            totalDeducciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
            todalPercepciones: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
            codProvinciaOperacion: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
            codLocalidadOperacion: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
            localidadEmision: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
            nroContrato: decimal;
            facturaPapel: LpgEndPointTypes.IfacturaPapel;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
            estado: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
            datosAdicionales: string;
        };
        autorizacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaLiquidacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            precioOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            subtotal: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            importeIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_3_Type(fractionDigits,minInclusive,maxInclusive) */
            operacionConIva: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coe: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            coeAjustado: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
            datosAdicionales: string;
        };
        ajuste: LpgEndPointTypes.Iajuste;
    }
    export interface Iimporte {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
        importe: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgConceptoImporteType(minLength,maxLength) */
        concepto: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
        alicuota: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgImporte_17_2_Type(fractionDigits,maxInclusive,minInclusive) */
        ivaCalculado: decimal;
    }
    export interface Icabecera {
        /** http://serviciosjava.afip.gob.ar/wslpg/#CgTipoCertificadoType(P,R,T,E) */
        tipoCertificado: "P" | "R" | "T" | "E";
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
        ptoEmision: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        nroOrden: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
        nroIngBrutoDepositario: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#CgTipoTitularGranoType(length,P,T) */
        titularGrano: "P" | "T";
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitDepositante: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
        nroIngBrutoDepositante: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
        codGrano: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
        campania: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuit0Type(minInclusive,maxInclusive) */
        cuitCorredor: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
        datosAdicionales: string;
    }
    export interface IcartaPorteFerroviaria {
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_9_0_Type(minExclusive,maxInclusive) */
        nroCartaPorte: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        pesoNetoConfirmadoDefinitivo: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPorcentajeType(fractionDigits,minInclusive,maxInclusive) */
        porcentajeSecadoHumedad: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        importeSecado: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        pesoNetoMermaSecado: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        tarifaSecado: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        importeZarandeo: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        pesoNetoMermaZarandeo: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        tarifaZarandeo: decimal;
    }
    export interface IdetalleMuestraAnalisis {
        /** http://serviciosjava.afip.gob.ar/wslpg/#String_400_Type(minLength,maxLength) */
        descripcionRubro: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#CgTipoRubroType(B,R) */
        tipoRubro: "B" | "R";
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPorcentajeType(fractionDigits,minInclusive,maxInclusive) */
        porcentaje: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_3_2_Type(fractionDigits,minInclusive,maxInclusive) */
        valor: decimal;
    }
    export interface Icalidad {
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_10_0_Type(minExclusive,maxInclusive) */
        analisisMuestra: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_10_0_Type(minExclusive,maxInclusive) */
        nroBoletin: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgGradoCodigoType(maxLength) */
        codGrado: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LsgGradoValorType(fractionDigits,maxInclusive,minExclusive) */
        valorGrado: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_3_2_Type(fractionDigits,minInclusive,maxInclusive) */
        valorContProteico: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgFactorEntType(fractionDigits,minExclusive,maxInclusive) */
        valorFactor: decimal;
        detalleMuestraAnalisis: LpgEndPointTypes.IdetalleMuestraAnalisis[];
    }
    export interface Iprimaria {
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgActividadType(maxInclusive,minExclusive) */
        nroActDepositario: number;
        ctg: Array<{
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_0_Type(minExclusive,maxInclusive) */
            nroCtg: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_9_0_Type(minExclusive,maxInclusive) */
            nroCartaDePorte: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
            pesoNetoConfirmadoDefinitivo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPorcentajeType(fractionDigits,minInclusive,maxInclusive) */
            porcentajeSecadoHumedad: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
            importeSecado: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
            pesoNetoMermaSecado: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
            tarifaSecado: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
            importeZarandeo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
            pesoNetoMermaZarandeo: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
            tarifaZarandeo: decimal;
        }>;
        cartaPorteFerroviaria: LpgEndPointTypes.IcartaPorteFerroviaria[];
        /** http://serviciosjava.afip.gob.ar/wslpg/#String_20_Type(minLength,maxLength) */
        descripcionTipoGrano: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        montoAlmacenaje: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        montoAcarreo: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        montoGastosGenerales: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        montoZarandeo: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPorcentajeType(fractionDigits,minInclusive,maxInclusive) */
        porcentajeSecadoDe: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPorcentajeType(fractionDigits,minInclusive,maxInclusive) */
        porcentajeSecadoA: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        montoSecado: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        montoPorCadaPuntoExceso: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        montoOtros: decimal;
        calidad: LpgEndPointTypes.Icalidad;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        pesoNetoMermaVolatil: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#String_20_Type(minLength,maxLength) */
        serviciosFormaDePago: string;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        serviciosOtros: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        serviciosConceptosNoGravados: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        serviciosPercepcionesIVA: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        serviciosOtrasPercepciones: decimal;
    }
    export interface IcertificadoDeposito {
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
        coeCertificadoDeposito: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
        pesoNeto: number;
    }
    export interface IretiroTransferencia {
        certificadoDeposito: LpgEndPointTypes.IcertificadoDeposito;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgActividadType(maxInclusive,minExclusive) */
        nroActDepositario: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitReceptor: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_9_0_Type(minExclusive,maxInclusive) */
        nroCartaPorteAUtilizar: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#String_400_Type(minLength,maxLength) */
        descripcionCausaJudicial: string;
    }
    export interface Ipreexistente {
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_6_0_Type(minExclusive,maxInclusive) */
        nroPlanta: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_1_0_Type(minExclusive,maxInclusive) */
        tipoCertificadoDepositoPreexistente: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_12_0_Type(minExclusive,maxInclusive) */
        nroCertificadoDepositoPreexistente: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_14_0_Type(minExclusive,maxInclusive) */
        cacCertificadoDepositoPreexistente: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
        fechaEmisionCertificadoDepositoPreexistente: date;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_8_3_Type(fractionDigits,minExclusive,maxInclusive) */
        pesoNeto: decimal;
    }
    export interface IpreexistenteFusion {
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_6_0_Type(minExclusive,maxInclusive) */
        nroPlanta: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_12_0_Type(minExclusive,maxInclusive) */
        nroCertificadoDepositoPreexistente: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
        fechaEmisionCertificadoDepositoPreexistente: date;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_3_Type(minInclusive,maxInclusive) */
        pesoNeto: number;
    }
    export interface IpesosResumen {
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        pesoBrutoCertificado: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        pesoMermaVolatil: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        pesoMermaSecado: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        pesoMermaZarandeo: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        pesoNetoCertificado: decimal;
    }
    export interface IserviciosResumen {
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        servicioSecado: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        servicioZarandeo: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        servicioOtros: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        servicioGastosGenerales: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        importeIVA: decimal;
        /** http://serviciosjava.afip.gob.ar/wslpg/#NumeroZ_8_2_Type(fractionDigits,minInclusive,maxInclusive) */
        servicioTotal: decimal;
    }
    export interface Iplanta {
        /** http://serviciosjava.afip.gob.ar/wslpg/#Numero_6_0_Type(minExclusive,maxInclusive) */
        nroPlanta: long;
        /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
        cuitTitularPlanta: number;
        /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:string(undefined) */
        razonSocialTitularPlanta: string;
    }
    export interface Ianticipo {
        liquidacion: {
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPtoEmision(minInclusive,maxInclusive) */
            ptoEmision: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:long(undefined) */
            nroOrden: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitComprador: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgActividadType(maxInclusive,minExclusive) */
            nroActComprador: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoComprador: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodTipoOperacionType(minLength,maxLength) */
            codTipoOperacion: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgNumeroContratoType(maxInclusive,minExclusive) */
            nroContrato: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodPuertoType(minExclusive,maxInclusive) */
            codPuerto: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDesPuertoLocalidadType(maxLength) */
            descPuertoLocalidad: string;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodigoGranoType(maxInclusive,minExclusive) */
            codGrano: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPesoNetoType(maxInclusive,minExclusive) */
            pesoNetoSinCertificado: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitVendedor: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoVendedor: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
            actuaCorredor: "S" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgSiNoType(S,N) */
            liquidaCorredor: "S" | "N";
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCuitType(minExclusive,maxInclusive) */
            cuitCorredor: long;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPorcType(fractionDigits,minInclusive,maxInclusive) */
            comisionCorredor: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgIbType(maxInclusive,minInclusive) */
            nroIngBrutoCorredor: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#xsd:date(undefined) */
            fechaPrecioOperacion: date;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioRefTnType(fractionDigits,maxInclusive,minInclusive) */
            precioRefTn: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
            alicIvaOperacion: decimal;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCampaniaType(maxInclusive,minInclusive) */
            campaniaPpal: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodLocProcedenciaType(minExclusive,maxInclusive) */
            codLocProcedencia: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodProvProcedenciaType(maxInclusive,minInclusive) */
            codProvProcedencia: number;
            /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDatosAdicionalesType(maxLength,minLength) */
            datosAdicionales: string;
            opcionales: LpgEndPointTypes.Iopcionales;
        };
        retenciones: {
            retencion: LpgEndPointTypes.Iretencion[];
        };
        deducciones: {
            deduccion: Array<{
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgCodConceptoType(maxLength) */
                codigoConcepto: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDetalleDeduccionType(minLength,maxLength) */
                detalleAclaratorio: string;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgDiasAlmacenajeType(maxInclusive,minInclusive) */
                diasAlmacenaje: long;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgPrecioKgDiarioType(fractionDigits,maxInclusive,minInclusive) */
                precioPKGdiario: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgComisionGastosAdmType(fractionDigits,maxInclusive,minInclusive) */
                comisionGastosAdm: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgBaseCalculoType(fractionDigits,maxInclusive,minInclusive) */
                baseCalculo: decimal;
                /** http://serviciosjava.afip.gob.ar/wslpg/#LpgAlicuotaType(fractionDigits,maxInclusive,minInclusive) */
                alicuotaIva: decimal;
            }>;
        };
    }
}
