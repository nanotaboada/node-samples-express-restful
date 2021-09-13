import connection from '../data/songsDatabase.mjs';

// https://github.com/eslint/eslint-plugin-markdown/issues/162
const db = await connection();

/* -----------------------------------------------------------------------------
  Service
----------------------------------------------------------------------------- */

const songsService = {

  retrieveAllSongs() {
    return db.data.songs;
  },

  filterSongsByYear(year) {
    // Array.prototype.filter() returns a new array with the elements that pass
    // the test. If no elements pass the test, an empty array will be returned.
    const songsByYear = db.data.songs.filter((song) => song.year === year);
    return songsByYear.length > 0 ? songsByYear : undefined;
  },

  findSongByRank(rank) {
    // Array.prototype.find() returns the value of the first element in the
    // provided array that satisfies the provided testing function. If no
    // values satisfy the testing function, undefined is returned.
    return db.data.songs.find((song) => song.rank === rank);
  },

  getRangeOfYears() {
    const years = db.data.songs.map((song) => song.year);
    const min = Math.min(...years);
    const max = Math.max(...years);
    return { min, max };
  },

  getRangeOfRanks() {
    const min = 1;
    const max = 500;
    return { min, max };
  },
};

export default songsService;
