describe('Comparadores comunes', () =>{
    const user = {
        name: "Francisco",
        lastname: "Contreras"
    }
    const user2 = {
        name: "Francisco",
        lastname: "Contreras"
    }

    test('igualdad de elementos', () =>{
        expect(user).toEqual(user2);
    });
});