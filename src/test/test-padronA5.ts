import { CacheLogin } from "./cache-login";
import { PersonaServiceA5 } from "../afip-apis";

const DEFAULT_CERTIFICATE = "./private/certificate/TEST/09.2021/afip-test.crt";
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/TEST/09.2021/afip-test.key";
const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";

const cacheLogin = CacheLogin.Instance;
cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;

cacheLogin.getTicket(PersonaServiceA5.serviceId)
    .then(ticket => {
        console.log("=== ticket ===");
        console.log(JSON.stringify(ticket));
        const personaServiceA5 = new PersonaServiceA5(PersonaServiceA5.testWSDL);
        return personaServiceA5.dummy({})
            .then(r => {
                console.log(`===dummy===\n${JSON.stringify(r)}`);
                return personaServiceA5.getPersona({
                    token: ticket.credentials.token,
                    sign: ticket.credentials.sign,
                    cuitRepresentada: 20220536999,
                    idPersona: 30638700227
                });
            });
    })
    .then(r => {
        console.log(`===getPersona===\n${JSON.stringify(r)}`);
        console.log("=== FIN ===");
    })
    .catch(err => {
        console.error(err);
    });
