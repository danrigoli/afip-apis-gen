import { CacheLogin } from "./cache-login";
import { Wsfexv1 } from "../afip-apis";
import * as path from "path";

const DEFAULT_CERTIFICATE: string = path.resolve("./private/certificate/certificate.crt");
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/TEST/09.2021/afip-test.key";
const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";

const cacheLogin = CacheLogin.Instance;
cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;

const wsfexv1 = new Wsfexv1(Wsfexv1.testWSDL);
const authCmp = {
    Id: 1,
    Fecha_cbte: "2019-04-01",
    Cbte_Tipo: 1,
    Punto_vta: 1,
    Cbte_nro: 1,
    Tipo_expo: 1,
    Permiso_existente: "",
    Permisos: { Permiso: [{ Id_permiso: "1", Dst_merc: 1 }] },
    Dst_cmp: 1,
    Cliente: "",
    Cuit_pais_cliente: 1,
    Domicilio_cliente: "",
    Id_impositivo: "",
    Moneda_Id: "PES",
    Moneda_ctz: 1,
    Obs_comerciales: "",
    Imp_total: 100,
    Obs: "",
    Cmps_asoc: undefined,
    Forma_pago: "",
    Incoterms: "",
    Incoterms_Ds: "",
    Idioma_cbte: 1,
    Items:
    {
        Item: [{
            Pro_ds: "A",
            Pro_umed: 1,
            Pro_total_item: 10
        }]
    },
    Opcionales: undefined
};
wsfexv1.FEXDummy()
    .then(r => {
        console.log(`===FEDummy===\n${JSON.stringify(r)}`);
        if (r && r.FEXDummyResult
            && r.FEXDummyResult.AppServer === "OK"
            && r.FEXDummyResult.DbServer === "OK"
            && r.FEXDummyResult.AuthServer === "OK") {
            return cacheLogin.getTicket(Wsfexv1.serviceId)
                .then(ticket => {
                    console.log("=== ticket ===");
                    console.log(JSON.stringify(ticket));
                    const auth = {
                        Token: ticket.credentials.token,
                        Sign: ticket.credentials.sign,
                        Cuit: 20220536999
                    };
                    return wsfexv1.FEXCheck_Permiso({ Auth: auth, ID_Permiso: "1", Dst_merc: 1 })
                        .then(r => {
                            console.log(`===FEXCheck_Permiso===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetCMP({ Auth: auth, Cmp: { Cbte_tipo: 1, Punto_vta: 1, Cbte_nro: 1 } });
                        })
                        .then(r => {
                            console.log(`===FEXGetCMP===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetLast_CMP({
                                Auth: {
                                    Token: ticket.credentials.token,
                                    Sign: ticket.credentials.sign,
                                    Cuit: 20220536999,
                                    Pto_venta: 1,
                                    Cbte_Tipo: 1
                                }
                            });
                        })
                        .then(r => {
                            console.log(`===FEXGetLast_CMP===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetLast_ID({ Auth: auth });
                        })
                        .then(r => {
                            console.log(`===FEXGetLast_ID===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_Cbte_Tipo({ Auth: auth });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_Cbte_Tipo===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_Ctz({ Auth: auth, Mon_id: "PES" });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_Ctz===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_DST_CUIT({ Auth: auth });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_DST_CUIT===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_DST_pais({ Auth: auth });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_DST_pais===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_Idiomas({ Auth: auth });
                        })

                        .then(r => {
                            console.log(`===FEXGetPARAM_Idiomas===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_Incoterms({ Auth: auth });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_Incoterms===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_MON({ Auth: auth });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_MON===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_MON_CON_COTIZACION({ Auth: auth, Fecha_CTZ: "20190517" });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_MON_CON_COTIZACION===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_Opcionales({ Auth: auth });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_Opcionales===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_PtoVenta({ Auth: auth });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_PtoVenta===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_Tipo_Expo({ Auth: auth });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_Tipo_Expo===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXGetPARAM_UMed({ Auth: auth });
                        })
                        .then(r => {
                            console.log(`===FEXGetPARAM_UMed===\n${JSON.stringify(r)}`);
                            return wsfexv1.FEXAuthorize({ Auth: auth, Cmp: authCmp });
                        })
                        .then(r => {
                            console.log(`===FEXAuthorize===\n${JSON.stringify(r)}`);
                            return;
                        });
                });
        }
        console.error("Ocurrió algun error en la verificación del estado de los servicios");
        return;
    })
    .catch(err => {
        console.error(JSON.stringify(err));
    });