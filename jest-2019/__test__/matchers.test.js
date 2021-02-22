describe('Comparing equals obj', () => {
    const user1 = {
        name: 'rigo',
        lastName: 'salas'
    };
    
    const user2 = {
        name: 'veronica',
        lastName: 'hevia'
    };

    it('should be equal', () => {
        expect(user2).toEqual({
            name: 'veronica',
            lastName: 'hevia'
        });
    });

    it('should not be equal', () => {
        expect(user1).not.toEqual();
    });
});