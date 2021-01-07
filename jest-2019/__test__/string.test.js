describe( 'testing strings', () => {

    const testText = 'sample';

    it('should contain text test', () => {
        expect(testText).toMatch(/ample/);
    });

    it('should not contain text test', () => {
        expect(testText).not.toMatch(/rigo/);
    });

    it('check the length', () => {
        expect(testText).toHaveLength(6);
    });

} );