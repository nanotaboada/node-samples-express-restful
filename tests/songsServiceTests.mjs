import { expect } from 'chai';
import service from '../services/songsService.mjs';

describe('Unit Tests', () => {
  describe('Service', () => {
    describe('getRangeOfYears', () => {
      it('When invoked, it should return the min/max in range of existing years (1948-2009)', async () => {
        const { min, max } = service.getRangeOfYears();
        expect(min).to.equal(1948);
        expect(max).to.equal(2009);
      });
    });
    describe('getRangeOfRanks', () => {
      it('When invoked, it should return the min/max in range of existing ranks (1-500)', async () => {
        const { min, max } = service.getRangeOfRanks();
        expect(min).to.equal(1);
        expect(max).to.equal(500);
      });
    });
  });
});
