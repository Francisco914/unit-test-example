describe("validar cadenas de texto", () => {
    const texto="es un bonito texto";
    test("debe contener el siguiente texto", () => {
        expect(texto).toMatch("bonito");
    });
    test("no contiene el siguiente texto", () => {
        expect(texto).not.toMatch("fin");
    });
    test("tiene una longitud de 18", ()=>{
        expect(texto).toHaveLength(18);
    });
});