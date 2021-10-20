import { RemHarinaService, RemHarinaServiceSOAPTypes } from "./wsremharina.soap";
import { CacheLogin, ILoginTicketResponse } from "./../../test/cache-login";
const url = "https://fwshomo.afip.gov.ar/wsremharina/RemHarinaService";
let remHarina: RemHarinaService;

const DEFAULT_URLWSAAWSDL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL";
const DEFAULT_CERTIFICATE = "./private/certificate/certificate.crt";
const DEFAULT_CERTIFICATE_KEY = "./private/certificate/private.key";
const cuitRepresentada = 30601506420;
const wsdl = RemHarinaService.testWSDL;


const cacheLogin = CacheLogin.Instance;
cacheLogin.certificateKey = DEFAULT_CERTIFICATE_KEY;
cacheLogin.certificatePath = DEFAULT_CERTIFICATE;
cacheLogin.wsaawsdl = DEFAULT_URLWSAAWSDL;

describe("wsremharina", () => {
    let ticket: ILoginTicketResponse;
    let authRequest: RemHarinaServiceSOAPTypes.IauthRequest;
    it("should create", () => {
        remHarina = new RemHarinaService(wsdl);
        expect(remHarina.url).toEqual(url);
    });
    it("should get service status", () => {
        return remHarina.dummy()
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("dummyReturn");
                expect(response.dummyReturn).toHaveProperty("appserver");
                expect(response.dummyReturn).toHaveProperty("authserver");
                expect(response.dummyReturn).toHaveProperty("dbserver");
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
    it("should create a login ticket", async () => {
        try {
            ticket = await cacheLogin.getTicket(RemHarinaService.serviceId);
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
    it("should return Codigos de Domicilio", () => {
        return remHarina.consultarCodigosDomicilio({
            authRequest,
            cuitTitularDomicilio: cuitRepresentada
        })
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("consultarCodigosDomicilioReturn");
                expect(response.consultarCodigosDomicilioReturn).toHaveProperty("arrayDomicilios");
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
    it("should return Tipos de Comprobante", () => {
        return remHarina.consultarTiposComprobante({ authRequest })
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("codigoDescripcionReturn");
                expect(response.codigoDescripcionReturn).toHaveProperty("arrayCodigoDescripcion");
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
    it("should return Tipos de Estado", () => {
        return remHarina.consultarTiposEstado({ authRequest })
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("codigoDescripcionReturn");
                expect(response.codigoDescripcionReturn).toHaveProperty("arrayCodigoDescripcion");
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
});