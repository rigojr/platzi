import { getDataFromApi } from '../promise';

describe('testing promise', () => {

    it('testing api', (done) => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then( data => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });

    it('testing resolve', () => {
        expect(Promise.resolve('solve')).resolves.toBe('solve'); 
    });

    it('testing reject with error', () => {
        expect(Promise.reject(new Error('Error')))
            .rejects.toThrow('Error')
    });

    it('testing reject without error', () => {
        expect(Promise.reject('reject')).rejects.toBe('reject');
    });

});