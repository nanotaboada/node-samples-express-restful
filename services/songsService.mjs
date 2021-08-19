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

  retrieveSongsByYear(year) {
    let songsByYear;
    const years = db.data.songs.map((song) => song.year);
    if (year >= Math.min(...years) && year <= Math.max(...years)) {
      songsByYear = db.data.songs.filter((song) => song.year === year);
    } else {
      songsByYear = undefined;
    }
    return songsByYear;
  },

  retrieveSongsByRank(rank) {
    let songsByRank;
    if (rank > 0 && rank <= 500) {
      songsByRank = db.data.songs.find((song) => song.rank === rank);
    } else {
      songsByRank = undefined;
    }
    return songsByRank;
  },
};

export default songsService;
