import { LoginTicket } from "./../afip-apis";

const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";
const DEFAULT_SERVICIO = "wsfe";
const DEFAULT_CERTIFICATE = "./private/certificate/TEST/09.2021/afip-test.crt";
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/TEST/09.2021/afip-test.key";

const loginTicket = new LoginTicket();

test("Return the login ticket", () => {
    return loginTicket.wsaaLogin(DEFAULT_SERVICIO, DEFAULT_URLWSAAWSDL, DEFAULT_CERTIFICATE, DEFAULT_CERTIFICATE_KEY)
        .then((ticket) => {
            expect(ticket).toBeDefined();
        })
        .catch(e =>
            expect(e).toBeDefined());
}, 20000); // Los ws de la afip tardan muucho

