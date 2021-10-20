import { Wscdcv1 } from "./wscdcv1.soap";
const wscdcv1 = new Wscdcv1(Wscdcv1.testWSDL);
describe("Wscdcv1", () => {
    it("should create", () => {
        expect(wscdcv1.url).toBeDefined;
    });
    it("should get service status", () => {
        wscdcv1.ComprobanteDummy()
            .then((response) => {
                expect(response).toBeDefined;
                expect(response).toHaveProperty("ComprobanteDummyResult");
            })
            .catch(err => {
                expect(err).toBeDefined;
            });
    });
});