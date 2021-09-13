import supertest from 'supertest';
import { expect } from 'chai';
import app from '../app.mjs';

const request = supertest(app);

describe('Integration Tests', () => {
  describe('HTTP GET', () => {
    describe('/api/v1/songs', () => {
      it('When request has no parameters, then response status code should be 200 (OK)', async () => {
        const response = await request.get('/api/v1/songs');
        expect(response.statusCode).to.equal(200);
      });
      it('When request has unexpected parameter, then response status code should be 404 (Bad Request)', async () => {
        const response = await request.get('/api/v1/songs/foobar');
        expect(response.statusCode).to.equal(404);
      });
    });
    describe('/api/v1/songs/year/:year', () => {
      it('When request parameter is out of range of existing years, then response status code should be 422 (Unprocessable Entity)', async () => {
        const response = await request.get('/api/v1/songs/year/2021');
        expect(response.statusCode).to.equal(422);
      });
      it('When request parameter is within range of existing years but does not match any song, then response status code should be 400 (Not Found)', async () => {
        const response = await request.get('/api/v1/songs/year/1999'); // Verified against collection that there are no songs from 1999
        expect(response.statusCode).to.equal(404);
      });
      it('When request parameter is within range of existing years and matches songs, then response status code should be 200 (OK)', async () => {
        const response = await request.get('/api/v1/songs/year/1977');
        expect(response.statusCode).to.equal(200);
      });
      it('When request parameter is within range of existing years and matches songs, then response body should contain songs from that year', async () => {
        const response = await request.get('/api/v1/songs/year/1977');
        response.body.forEach((song) => {
          expect(song).to.have.property('year', '1977');
        });
      });
    });
    describe('/api/v1/songs/rank/:rank', () => {
      it('When request parameter is out of range of existing ranks, then response status code should be 422 (Unprocessable Entity)', async () => {
        const response = await request.get('/api/v1/songs/rank/555');
        expect(response.statusCode).to.equal(422);
      });
      it('When request parameter is within range of existing ranks, then response status code should be 200 (OK)', async () => {
        const response = await request.get('/api/v1/songs/rank/42');
        expect(response.statusCode).to.equal(200);
      });
      it('When request parameter is within range of existing ranks, then response body should contain the song with such rank', async () => {
        const response = await request.get('/api/v1/songs/rank/42');
        expect(response.body).to.have.property('rank', 42);
      });
    });
  });
});
