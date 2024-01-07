/* ------------------------------------------------------------------------------------------------
  Service
------------------------------------------------------------------------------------------------ */

import songDatabase from '../data/songDatabase.mjs';

const songService = {
  retrieve() {
    return songDatabase.selectAll();
  },
  retrieveByYear(year) {
    const songsByYear = songDatabase.selectAllByYear(year);
    return songsByYear.length > 0 ? songsByYear : undefined;
  },
  retrieveByRank(rank) {
    return songDatabase.selectSingleByRank(rank);
  },
  retrieveRangeOfYears() {
    const min = songDatabase.selectMinYear();
    const max = songDatabase.selectMaxYear();
    return { min, max };
  },
  retrieveRangeOfRanks() {
    const min = 1;
    const max = 500;
    return { min, max };
  },
};

export default songService;
