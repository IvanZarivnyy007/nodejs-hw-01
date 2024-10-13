import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const json = JSON.stringify(updatedContacts);
  await fs.writeFile(PATH_DB, json, 'utf-8');
};