import { callbackHell } from '../callback';

describe('testing callbacks', () => {
    it('Callback', done => {
        function otherCallBack(data) {
            expect(data).toBe('Hell is calling');
            done();
        };
        callbackHell(otherCallBack);
    });
});