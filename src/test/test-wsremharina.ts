import { CacheLogin } from "./cache-login";
import { RemHarinaService } from "../afip-apis";

// -- Test
const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";
const DEFAULT_CERTIFICATE = "./private/certificate/TEST/09.2021/afip-test.crt";
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/TEST/09.2021/afip-test.key";
const cuitRepresentada = 30601506420;
const wsdl = RemHarinaService.testWSDL;

// -- Production
// const  DEFAULT_URLWSAAWSDL = "https://wsaa.afip.gov.ar/ws/services/LoginCms?WSDL";
// const  DEFAULT_CERTIFICATE = "./../../private/certificate/MOLISUD/FE_MOLISUD_nvo_292079b0a4b32b96.crt";
// const  DEFAULT_CERTIFICATE_KEY = "./../../private/certificate/MOLISUD/Privada_MOLISUDSA_FacturacionMolisud.key";
// const cuitRepresentada = 30601506420;
// const wsdl = RemHarinaService.produccionWSDL;

const cacheLogin = CacheLogin.Instance;

cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;

cacheLogin.getTicket(RemHarinaService.serviceId)
    .then(ticket => {
        console.log("=== ticket ===");
        console.log(JSON.stringify(ticket));
        const authRequest = {
            token: ticket.credentials.token,
            sign: ticket.credentials.sign,
            cuitRepresentada
        };
        const remHarinaService = new RemHarinaService(wsdl);
        return remHarinaService.dummy()
            .then(r => {
                console.log(`===dummy===\n${JSON.stringify(r)}`);
                return remHarinaService.consultarCodigosDomicilio({
                    authRequest,
                    cuitTitularDomicilio: cuitRepresentada
                });
            })
            .then(r => {
                console.log(`===consultarCodigosDomicilio===\n${JSON.stringify(r)}`);
                return remHarinaService.consultarPuntosEmision({ authRequest });
            })
            .then(r => {
                console.log(`===consultarPuntosEmision===\n${JSON.stringify(r)}`);
                return remHarinaService.consultarTiposComprobante({ authRequest });
            })
            .then(r => {
                console.log(`===consultarTiposComprobante===\n${JSON.stringify(r)}`);
                return remHarinaService.consultarTiposEstado({ authRequest });
            })
            .then(r => {
                console.log(`===consultarTiposEstado===\n${JSON.stringify(r)}`);
                return remHarinaService.consultarTiposContingencia({ authRequest });
            })
            .then(r => {
                console.log(`===consultarTiposContingencia===\n${JSON.stringify(r)}`);
                return remHarinaService.consultarTiposMercaderia({ authRequest });
            })
            .then(r => {
                console.log(`===consultarTiposMercaderia===\n${JSON.stringify(r)}`);
                return remHarinaService.consultarUnidadesVenta({ authRequest });
            })
            .then(r => {
                console.log(`===consultarUnidadesVenta===\n${JSON.stringify(r)}`);
                return remHarinaService.consultarPaises({ authRequest });
            })
            .then(r => {
                console.log(`===consultarPaises===\n${JSON.stringify(r)}`);
                return remHarinaService.consultarAduanas({
                    token: authRequest.token,
                    sign: authRequest.sign,
                    cuitRepresentada: authRequest.cuitRepresentada
                });
            })
            .then(r => {
                console.log(`===consultarAduanas===\n${JSON.stringify(r)}`);
                return remHarinaService.consultarProvincias({ authRequest });
            })
            .then(r => {
                console.log(`===consultarAduanas===\n${JSON.stringify(r)}`);
            });
    })
    .then(() => {
        console.log("=== FIN ===");
    })
    .catch(err => {
        console.error(err);
    });




