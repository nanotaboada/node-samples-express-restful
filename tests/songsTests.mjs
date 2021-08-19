/* eslint-disable import/extensions */

import supertest from 'supertest';
import { should } from 'chai';
import app from '../app.mjs';

const request = supertest(app);
should();

describe('HTTP GET', () => {
  describe('/api/v1/songs', () => {
    it('When request has no parameters, then response Status-Code should be 200 (OK)', (done) => {
      request
        .get('/api/v1/songs')
        .end((error, response) => {
          response.statusCode.should.equal(200);
          done();
        });
    });
  });
});
