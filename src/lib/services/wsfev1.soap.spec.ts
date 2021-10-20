import { Wsfev1 } from "./wsfev1.soap";

describe("Wsfev1", () => {
    it("shoul create", () => {
        const url = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms";
        const wsfev1 = new Wsfev1(url);
        expect(wsfev1.url).toEqual(url);
    });
});