import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';

/* -----------------------------------------------------------------------------
  Database
----------------------------------------------------------------------------- */

const filename = join(dirname(fileURLToPath(import.meta.url)), '../data/songs-sqlite3.db');
const db = new Database(filename, { fileMustExist: true });
db.pragma('journal_mode = WAL');

const songsDatabase = {
  // https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md#allbindparameters---array-of-rows
  selectAll() {
    return db.prepare('SELECT * FROM songs').all();
  },
  // https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md#getbindparameters---row
  selectMinYear() {
    return db.prepare('SELECT MIN(year) FROM songs').pluck().get();
  },
  selectMaxYear() {
    return db.prepare('SELECT MAX(year) FROM songs').pluck().get();
  },
  selectAllByYear(year) {
    return db.prepare('SELECT * FROM songs WHERE year = ?').all(year);
  },
  selectSingleByRank(rank) {
    return db.prepare('SELECT * FROM songs WHERE rank = ?').get(rank);
  },
};

export default songsDatabase;
