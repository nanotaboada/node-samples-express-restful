// Remember to set type: module in package.json or use .mjs extension
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

/* -----------------------------------------------------------------------------
  Database
----------------------------------------------------------------------------- */

async function connection() {
  const filename = join(dirname(fileURLToPath(import.meta.url)), '../data/songs.json');
  const adapter = new JSONFile(filename);
  const defaultData = { songs: [] };
  const low = new Low(adapter, defaultData);
  await low.read();
  return low;
}

export default connection;
