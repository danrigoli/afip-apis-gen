import { LoginCmsSoap } from "./wsaa.soap";

describe("wsaa", () => {
    it("shoul create", () => {
        const url = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms";
        const wsaa = new LoginCmsSoap(url);
        expect(wsaa.url).toEqual(url);
    });
});