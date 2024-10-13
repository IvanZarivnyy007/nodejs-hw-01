import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  const data = await fs.readFile(PATH_DB);
  const json = data.toString('utf-8');
  const arr = JSON.parse(json);
  return arr;
};
