import request from 'supertest';
import app from '../src/app';

describe('GET /api', () => {
    it('should return 200 OK', () => {
        return request(app).get('/api')
            .expect(200);
    });

    it('shound return 404 OK', () => {
        return request(app).get('/api/a')
            .expect(404);
    });
});
