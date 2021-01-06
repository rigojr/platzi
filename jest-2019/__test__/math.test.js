import * as operation from '../math';

describe('Math.js', () => {
    it('should add', () => {
        expect( operation.sumar(1,1)).toBe(2);
    });
});