import * as arraies from '../array';

describe('Testing Arryas', () => {
    
    it('should have a banana', () => {
        expect( arraies.arrayFruits() ).toContain('banana'); 
    });

    it('should not have a platano', () => {
        expect( arraies.arrayFruits() ).not.toContain('platano');
    });

    it('testing array length', () => {
        expect( arraies.arrayFruits() ).toHaveLength(6);
    });

});