import { CacheLogin } from "./cache-login";
import { Wscdcv1 } from "../afip-apis";

const DEFAULT_CERTIFICATE = "./private/certificate/TEST/09.2021/afip-test.crt";
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/TEST/09.2021/afip-test.key";
const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";

const cacheLogin = CacheLogin.Instance;
cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;

cacheLogin.getTicket(Wscdcv1.serviceId)
    .then(ticket => {
        console.log("=== ticket ===");
        console.log(JSON.stringify(ticket));
        const auth = {
            Token: ticket.credentials.token,
            Sign: ticket.credentials.sign,
            Cuit: 20220536999
        };
        const wscdcv1 = new Wscdcv1(Wscdcv1.testWSDL);
        return wscdcv1.ComprobanteDummy({})
            .then(r => {
                console.log(`===ComprobanteDummy===\n${JSON.stringify(r)}`);
                return wscdcv1.ComprobantesModalidadConsultar({ Auth: auth });
            })
            .then(r => {
                console.log(`===ComprobantesModalidadConsultar===\n${JSON.stringify(r)}`);
                return wscdcv1.ComprobantesTipoConsultar({ Auth: auth });
            })
            .then(r => {
                console.log(`===ComprobantesTipoConsultar===\n${JSON.stringify(r)}`);
                return wscdcv1.DocumentosTipoConsultar({ Auth: auth });
            })
            .then(r => {
                console.log(`===DocumentosTipoConsultar===\n${JSON.stringify(r)}`);
                return wscdcv1.OpcionalesTipoConsultar({ Auth: auth });
            })
            .then(r => {
                console.log(`===OpcionalesTipoConsultar===\n${JSON.stringify(r)}`);
                return wscdcv1.ComprobanteConstatar({
                    Auth: auth,
                    CmpReq: {
                        CbteModo: "CAE",
                        CuitEmisor: 30639453738,
                        PtoVta: 8340,
                        CbteTipo: 6,
                        CbteNro: 35100022,
                        CbteFch: "20181108",
                        ImpTotal: 127200,
                        CodAutorizacion: "68428424451327",
                        DocTipoReceptor: "96",
                        DocNroReceptor: "99777666"
                    }
                });
            });
    })
    .then((r) => {
        console.log("=== ComprobanteConstatar ===");
        console.log(`resultado (A=Aprobado, R=Rechazado): ${r.ComprobanteConstatarResult.Resultado}. Observacion: ${JSON.stringify(r.ComprobanteConstatarResult.Observaciones)}`);
        console.log("=== FIN ===");
    })
    .catch(err => {
        console.log("=== error ===");
        console.error(err);
    });
