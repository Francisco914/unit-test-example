import { sumar, multiplicar, restar, dividir } from "../maths.js";

describe('Calculos matematicos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1,2)).toBe(3);
    });
    test('Prueba de resta', () => {
        expect(restar(1,2)).toBe(1);
    });
    test('Prueba de multiplicar', () => {
        expect(multiplicar(13,2)).toBe(26);
    });
    test('Prueba de dividir', () => {
        expect(dividir(9,3)).toBe(3);
    });
})