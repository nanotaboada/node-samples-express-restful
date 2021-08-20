import supertest from 'supertest';
import { expect } from 'chai';
import app from '../app.mjs';

const request = supertest(app);

describe('HTTP GET', () => {
  describe('/api/v1/songs', () => {
    it('When request has no parameters, then response Status Code should be 200 (OK)', async () => {
      const response = await request.get('/api/v1/songs');
      expect(response.statusCode).to.equal(200);
    });
  });
  describe('/api/v1/songs/year/:year', () => {
    it('When request parameter is unknown year, then response status code should be 400 (Bad Request)', async () => {
      const response = await request.get('/api/v1/songs/year/1776');
      expect(response.statusCode).to.equal(400);
    });
    it('When request parameter is valid year, then response status code should be 200 (OK)', async () => {
      const response = await request.get('/api/v1/songs/year/1977');
      expect(response.statusCode).to.equal(200);
    });
    it('When request parameter is valid year, then response body should contain songs matching that year', async () => {
      const response = await request.get('/api/v1/songs/year/1977');
      response.body.forEach((song) => {
        expect(song).to.have.property('year', 1977);
      });
    });
  });
  describe('/api/v1/songs/rank/:rank', () => {
    it('When request parameter is unknown rank, then response status code should be 400 (Bad Request)', async () => {
      const response = await request.get('/api/v1/songs/rank/501');
      expect(response.statusCode).to.equal(400);
    });
  });
});
