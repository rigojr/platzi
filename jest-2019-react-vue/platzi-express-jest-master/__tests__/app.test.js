const request = require('supertest');
const app = require('../app');

describe('Testing our server', () => {
    it('should response get method', () => {
        request(app).get('/')
            .then( response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});