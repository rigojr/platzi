import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Snapshots testing', () => {

    it('first test', () => {
        expect(getCharacter(rick))
            .toMatchSnapshot();
    });

    it('testing execption', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 10000),
        };
        expect(user).toMatchSnapshot({
            createAt: expect.any(Date),
            id: expect.any(Number)
        });
    });

    it(' should have exception', () => {
        const user = {
            id: Math.floor(Math.random() * 10000),
            name: "Jose"
        };
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        });
    });

});
