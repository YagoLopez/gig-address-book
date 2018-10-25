import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';
import { isDuplicatedEmail } from '../validators/duplicatedEmail.validator';

describe('duplicatedEmailValidator()', () => {

  let contactsService: ContactsService;
  let contacts: Contact[];

  beforeEach(() => {
    contactsService = new ContactsService();
    contactsService.loadContactsFromMemory();
    contacts = contactsService.getAll();
    // Mock console.table() to avoid error. Jest doesnt run in real browser
    console.table = jest.fn();
  });


  test('isDuplicatedEmail(): should return true with duplicated email', () => {
    const isEmailDuplicated = isDuplicatedEmail('email1@domain.com', contacts);
    expect(isEmailDuplicated).toBe(true);
  });

  test('isDuplicatedEmail(): should return false with no duplicated email', () => {
    const isEmailDuplicated = isDuplicatedEmail('xxxx@domain.com', contacts);
    expect(isEmailDuplicated).toBe(false);
  });

});