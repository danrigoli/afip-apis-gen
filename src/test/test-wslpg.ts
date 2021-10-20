import { CacheLogin } from "./cache-login";
import { WsLpgv120 } from "../afip-apis";

const DEFAULT_CERTIFICATE = "./private/certificate/TEST/09.2021/afip-test.crt";
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/TEST/09.2021/afip-test.key";
const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";

const cacheLogin = CacheLogin.Instance;
cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;

cacheLogin.getTicket(WsLpgv120.serviceId)
    .then(ticket => {
        console.log("=== ticket ===");
        console.log(JSON.stringify(ticket));
        const wsLpgv120 = new WsLpgv120(WsLpgv120.testWSDL);
        return wsLpgv120.dummy()
            .then(r => {
                console.log(`===dummy===\n${JSON.stringify(r)}`);
                return wsLpgv120.liquidacionXNroOrdenConsultar(
                    {
                        auth: {
                            token: ticket.credentials.token,
                            sign: ticket.credentials.sign,
                            cuit: 20220536999
                        },
                        ptoEmision: 1,
                        nroOrden: 1
                    });
            })
            .then(r => {
                console.log(`===liquidacionXNroOrdenConsultar===\n${JSON.stringify(r)}`);
                return wsLpgv120.provinciasConsultar(
                    {
                        auth: {
                            token: ticket.credentials.token,
                            sign: ticket.credentials.sign,
                            cuit: 20220536999
                        }
                    }
                );
            })
            .then(r => {
                console.log(`===provinciasConsultar===\n${JSON.stringify(r)}`);
                return wsLpgv120.tipoDeduccionConsultar(
                    {
                        auth: {
                            token: ticket.credentials.token,
                            sign: ticket.credentials.sign,
                            cuit: 20220536999
                        }
                    }
                );
            })
            .then(r => {
                console.log(`===tipoDeduccionConsultar===\n${JSON.stringify(r)}`);
            });
    })
    .then(() => {
        console.log("=== FIN ===");
    })
    .catch(err => {
        console.error(err);
    });




