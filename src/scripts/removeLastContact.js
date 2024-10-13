import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const arr = await readContacts();
  arr.pop();
  writeContacts(arr);
};

removeLastContact();
