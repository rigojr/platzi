import * as operation from '../math';

describe('Math.js', () => {
    it('should add', () => {
        expect( operation.sumar(1,1)).toBe(2);
    });
    
    it('should *', () => {
        expect( operation.multiplicar(2,2)).toBe(4);
    });

    it('should /', () => {
        expect( operation.dividir(2,2) ).toBe(1);
    });

    it('should -', () => {
        expect( operation.restar(2,2) ).toBe(0);
    });

});