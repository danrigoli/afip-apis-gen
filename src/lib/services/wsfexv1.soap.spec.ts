import { Wsfexv1 } from "./wsfexv1.soap";
import { CacheLogin, ILoginTicketResponse } from "./../../test/cache-login";
const url = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms";
let wsfexv1: Wsfexv1;

const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";
const DEFAULT_CERTIFICATE = "./private/certificate/certificate.crt";
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/private.key";

const cacheLogin = CacheLogin.Instance;
cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;
const cuitRepresentada = 20220536999;

describe("Wsfev1", () => {
    let ticket: ILoginTicketResponse;
    let authRequest;
    it("shoul create", () => {
        wsfexv1 = new Wsfexv1(url);
        expect(wsfexv1.url).toEqual(url);
    });
    it("should get service status", () => {
        wsfexv1.FEXDummy()
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("ComprobanteDummyResult");
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
    it("should create a login ticket", async () => {
        try {
            ticket = await cacheLogin.getTicket(Wsfexv1.serviceId);
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
});