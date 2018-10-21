import { MemoryContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

describe('ContactsService', () => {

  let contactsService: MemoryContactsService;
  let contacts: Contact[];

  beforeEach(() => {
    contactsService = new MemoryContactsService();
    contactsService.loadContactsFromMemory();
    contacts = contactsService.getAll();
  });

  test('should load all users from memory', () => {
    expect(contacts.length).toBe(4);
  });

  test('remove(): should remove contact from list', () => {
    contactsService.remove('email1@domain.com');
    expect(contacts.length).toBe(3);
  });

});