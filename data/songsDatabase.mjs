import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Low, JSONFile } from 'lowdb';

/* -----------------------------------------------------------------------------
  Database
----------------------------------------------------------------------------- */

async function connection() {
  const filename = join(dirname(fileURLToPath(import.meta.url)), '../data/songs.json');
  const adapter = new JSONFile(filename);
  const low = new Low(adapter);
  await low.read();
  return low;
}

export default connection;
