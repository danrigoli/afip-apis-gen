import { LoginTicket } from "./afip-wsaa";

describe("afip-wsaa", () => {
    it("shoul create", () => {
        // const url = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms";
        const loginTicket = new LoginTicket();
        expect(loginTicket.ticket).toBeUndefined();
    });
});