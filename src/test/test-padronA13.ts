import { PersonaServiceA13 } from "../afip-apis";
import { CacheLogin } from "./cache-login";

const DEFAULT_CERTIFICATE = "./private/certificate/TEST/09.2021/afip-test.crt";
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/TEST/09.2021/afip-test.key";
const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";

const cacheLogin = CacheLogin.Instance;
const cuitRepresentada = 20220536999;
const documento = "10631672";

cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;

cacheLogin.getTicket(PersonaServiceA13.serviceId)
    .then(ticket => {
        console.log("=== ticket ===");
        console.log(JSON.stringify(ticket));
        const a13 = new PersonaServiceA13(PersonaServiceA13.testWSDL);
        return a13.dummy({})
            .then(r => {
                console.log(`===dummy===\n${JSON.stringify(r)}`);
                return a13.getIdPersonaListByDocumento({
                    token: ticket.credentials.token,
                    sign: ticket.credentials.sign,
                    cuitRepresentada,
                    documento
                });
            })
            .then(id => {
                console.log(`===getIdPersonaListByDocumento===\n${JSON.stringify(id)}`);
                return a13.getPersona({
                    token: ticket.credentials.token,
                    sign: ticket.credentials.sign,
                    cuitRepresentada,
                    idPersona: id.idPersonaListReturn.idPersona
                });
            })
            .then(p => {
                console.log(`===getPersona===\n${JSON.stringify(p)}`);
                console.log("=== FIN ===");
            });
    })
    .catch(err => {
        console.error(err);
    });
