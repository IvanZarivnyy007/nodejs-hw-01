import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const arr = await readContacts();
  console.log(arr);
};

getAllContacts();
