import { getDataFromApi } from '../promise';

describe('testing async/await', () => {

    it('should api test', async () => {

        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1';

        await getDataFromApi(api)
            .then( data => {
                expect(data.results.length).toBeGreaterThan(0);
            });
        await getDataFromApi(getRick)
            .then( data => {
                expect(data.name).toEqual('Rick Sanchez');
            } );
    });

    it('should fail api', async () => {
        const apiError = 'https://httpstat.us/404';
        const peticion = getDataFromApi(apiError);
        await expect(peticion).rejects
            .toEqual(Error('Request failed with status code 404'));
    });

    it('solving a hi', async () => {
        await expect(Promise.resolve('hi')).resolves.toBe('hi');
        await expect(Promise.reject('Error')).rejects.toBe('Error');
    })

});