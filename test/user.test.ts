import request from 'supertest';
import app from '../src/app';

describe('GET /test-users', () => {
    it('should return 200 OK', () => {
        return request(app).get('/api/test-users')
            .expect(200);
    });
});

describe('GET /users', () => {
    it('should return 403 OK', () => {
        return request(app).get('/api/users')
            .expect(403);
    });
});


describe('POST /login', () => {
    it('should return some defined error message with valid parameters', (done) => {
        return request(app).post('/api/login')
            .field('email', 'john@me.com')
            .field('password', 'Hunter2')
            .expect(302)
            .end(function(err, res) {
                // expect(res.error).not.to.be.undefined;
                done();
            });

    });
});
