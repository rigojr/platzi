import * as operation from '../true';

describe('Testing nulls', () => {

    it('should be null', () => {
        expect(operation.isNull()).toBeNull();
    });

});

describe('Testing True', () => {
    
    it('should be true', () => {
        expect(operation.isTrue()).toBeTruthy();
    });

})

describe('Testing False', () => {

    it('should be false', () => {
        expect(operation.isFalse()).toBeFalsy();
    });

});

describe('Testing undefines', () => {

    it('should be undefined', () => {
        expect(operation.isUndefined()).toBeUndefined();
    });

});