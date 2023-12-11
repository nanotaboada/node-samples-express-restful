import database from '../data/songsDatabase.mjs';

/* -----------------------------------------------------------------------------
  Service
----------------------------------------------------------------------------- */

const songsService = {

  retrieve() {
    return database.selectAll();
  },

  retrieveByYear(year) {
    const songsByYear = database.selectAllByYear(year);
    return songsByYear.length > 0 ? songsByYear : undefined;
  },

  retrieveByRank(rank) {
    return database.selectSingleByRank(rank);
  },

  retrieveRangeOfYears() {
    const min = database.selectMinYear();
    const max = database.selectMaxYear();
    return { min, max };
  },

  retrieveRangeOfRanks() {
    const min = 1;
    const max = 500;
    return { min, max };
  },
};

export default songsService;
