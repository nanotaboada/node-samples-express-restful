import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Low, JSONFile } from 'lowdb';

const filename = join(dirname(fileURLToPath(import.meta.url)), '../data/songs.json');
const adapter = new JSONFile(filename);
const db = new Low(adapter);
db.read();

/* -----------------------------------------------------------------------------
  Service
----------------------------------------------------------------------------- */

const songsService = {
  retrieveAll() {
    return db.data;
  },
};

export default songsService;
