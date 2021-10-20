import { WsLpgv120 } from "./lpgservicev120.soap";
import { CacheLogin, ILoginTicketResponse } from "./../../test/cache-login";
const url = "https://fwshomo.afip.gov.ar/wslpg/LpgService";
let lpgv120: WsLpgv120;

const DEFAULT_CERTIFICATE = "./private/certificate/certificate.crt";
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/private.key";
const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";

const cacheLogin = CacheLogin.Instance;
cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;

describe("lpg", () => {
    let ticket: ILoginTicketResponse;
    it("should create", () => {
        lpgv120 = new WsLpgv120(WsLpgv120.testWSDL);
        expect(lpgv120.url).toEqual(url);
    });
    it("should get service status", () => {
        return lpgv120.dummy()
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
        ticket = await cacheLogin.getTicket(WsLpgv120.serviceId);
        expect(ticket).toBeDefined;
        expect(ticket.credentials).toBeDefined;
    });
    it("should return provincias", () => {
        return lpgv120.provinciasConsultar(
            {
                auth: {
                    token: ticket.credentials.token,
                    sign: ticket.credentials.sign,
                    cuit: 20220536999,
                }
            }
        )
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("provinciasReturn");
                expect(response.provinciasReturn).toHaveProperty("provincias");
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
    it("should return tipos deduccion", () => {
        return lpgv120.tipoDeduccionConsultar(
            {
                auth: {
                    token: ticket.credentials.token,
                    sign: ticket.credentials.sign,
                    cuit: 20220536999,
                }
            }
        )
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("tipoDeduccionReturn");
                expect(response.tipoDeduccionReturn).toHaveProperty("tiposDeduccion");
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
});