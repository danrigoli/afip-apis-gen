import { SoapService } from "./soap12";

describe("SoapService v1.2", () => {
    it("shoul create", () => {
        const url = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms";
        const soapService = new SoapService(url);
        expect(soapService.url).toEqual(url);
    });
});