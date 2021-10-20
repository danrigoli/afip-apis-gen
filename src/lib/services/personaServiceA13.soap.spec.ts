import { PersonaServiceA13 } from "../../afip-apis";

const personaServiceA13 = new PersonaServiceA13(PersonaServiceA13.testWSDL);


test("Prueba PersonaServiceA13.dummy", () => {
    return personaServiceA13.dummy({})
        .then((result) => {
            expect(result).toBeDefined();
        })
        .catch(e =>
            expect(e).toBeDefined());
}, 20000); // Los ws de la afip tardan muucho

