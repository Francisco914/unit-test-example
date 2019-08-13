import {arrayFruits,arrayColors} from '../array'
import { TestScheduler } from '@jest/core';

describe('¿El array tiene un platano?',()=>{
    test('Validar que el array tiene un platano', () => {
        expect(arrayFruits()).toContain('platano');
    });
    test('Validar que el array no tiene una banana', () => {
        expect(arrayFruits()).not.toContain('banana');
    });
    test('comprobar el tamaño de un arreglo',()=>{
        expect(arrayFruits()).toHaveLength(6);
    });
    test('Comprobaremos que existe el color azul',()=>{
        expect(arrayColors()).toContain('azul');
    })
});