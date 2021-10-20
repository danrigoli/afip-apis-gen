import { CacheLogin, ILoginTicketResponse } from "./../../test/cache-login";
import { PersonaServiceA5 } from "./personaServiceA5.soap";

const url = "https://awshomo.afip.gov.ar/sr-padron/webservices/personaServiceA5";
let personaA5: PersonaServiceA5;

const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";
const DEFAULT_CERTIFICATE = "./private/certificate/certificate.crt";
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/private.key";
const cuitRepresentada = 20220536999;
const wsdl = PersonaServiceA5.testWSDL;


const cacheLogin = CacheLogin.Instance;
cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;

describe("wsremharina", () => {
    let ticket: ILoginTicketResponse;
    let authRequest;
    it("should create", () => {
        personaA5 = new PersonaServiceA5(wsdl);
        expect(personaA5.url).toEqual(url);
    });
    it("should get service status", () => {
        return personaA5.dummy({})
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("return");
                expect(response.return).toHaveProperty("appserver");
                expect(response.return).toHaveProperty("authserver");
                expect(response.return).toHaveProperty("dbserver");
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
    it("should create a login ticket", async () => {
        try {
            ticket = await cacheLogin.getTicket(PersonaServiceA5.serviceId);
        } catch (err) {
            console.error(err);
        }
        expect(ticket).toBeDefined;
        expect(ticket.credentials).toBeDefined;
        authRequest = {
            token: ticket.credentials.token,
            sign: ticket.credentials.sign,
            cuitRepresentada
        };
    });
    it("should return Persona", () => {
        return personaA5.getPersona({
            token: ticket.credentials.token,
            sign: ticket.credentials.sign,
            cuitRepresentada,
            idPersona: 20220536999
        })
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("personaReturn");
                expect(response.personaReturn).toHaveProperty("datosGenerales");
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
});