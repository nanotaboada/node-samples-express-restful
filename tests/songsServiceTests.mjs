/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
import { expect } from 'chai';
import service from '../services/songsService.mjs';

describe('Unit Tests', function () {
  describe('Service', function () {
    describe('getRangeOfYears', function () {
      it('When invoked, it should return the min/max in range of existing years (1948-2009)', function () {
        const { min, max } = service.retrieveRangeOfYears();
        expect(min).to.equal(1948);
        expect(max).to.equal(2009);
      });
    });
    describe('getRangeOfRanks', function () {
      it('When invoked, it should return the min/max in range of existing ranks (1-500)', function () {
        const { min, max } = service.retrieveRangeOfRanks();
        expect(min).to.equal(1);
        expect(max).to.equal(500);
      });
    });
  });
});
