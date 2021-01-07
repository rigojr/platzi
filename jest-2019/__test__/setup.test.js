
afterEach(() => {console.log('after each')})
afterAll(() => {console.log('after all')})

beforeEach(() => {console.log('before each')})
beforeAll(() => {console.log('before all')})

describe('sample', () => {
    it('easy test', () => {
        expect(true).toBeTruthy();
    });
});