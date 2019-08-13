import {isNull, isUndefined} from '../true';
import {isTrue, isFalse} from '../true';
import { exportAllDeclaration } from '@babel/types';

describe('Probar resultados nulos', () => {
    test('null',()=>{
        expect(isNull()).toBeNull();
    })
})

describe('Probar resultados verdaderos', () => {
    test('Verdadero',()=>{
        expect(isTrue()).toBeTruthy();
    })
})

describe('Probar resultados falsos', () => {
    test('Falso',()=>{
        expect(isFalse()).toBeFalsy();
    })
})

describe('Probar resultados undefined', () => {
    test('Undefined',()=>{
        expect(isUndefined()).toBeUndefined();
    })
})

describe('Probar resultados negados', () => {
    test('Falso o verdadero',()=>{
        expect(isFalse()).not.toBeTruthy();
    })
})