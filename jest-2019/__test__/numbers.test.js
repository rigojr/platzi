import { numbers } from '../numbers';
import jest from 'jest'

describe('Matching numbers', () => {

    it('should be greather', () => {
        expect( numbers(2,2) ).toBeGreaterThan(3);
    });

    it('should be greater or equal', () => {
        expect( numbers(2,2) ).toBeGreaterThanOrEqual(4);
    });

    it('should be minor', () => {
        expect( numbers(2,2) ).toBeLessThan(5);
    });

    it('should be less or equal', () => {
        expect( numbers(2,2) ).toBeLessThanOrEqual(4);
    });

    it('should be floating', () => {
        expect( numbers(0.2,0.2) ).toBe(0.4);
    });

});