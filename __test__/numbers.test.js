import {numbers} from '../number'

describe('Comparación de numeros', () => {
    test('Mayor que',()=>{
        expect(numbers(2,2)).toBeGreaterThan(3);
    });
    test('Mayor o igual que',()=>{
        expect(numbers(2,2)).toBeGreaterThanOrEqual(3);
    });
    test('Menor que',()=>{
        expect(numbers(1,1)).toBeLessThan(3);
    });
    test('Menor o igual que',()=>{
        expect(numbers(1,2)).toBeLessThanOrEqual(3);
    });
    test('Numeros flotanres',()=>{
        expect(numbers(.2,.2)).toBeCloseTo(.4);
    });
});