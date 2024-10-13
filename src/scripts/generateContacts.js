import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    contacts.push(contact);
  }
  writeContacts(contacts);
};

generateContacts(5);
