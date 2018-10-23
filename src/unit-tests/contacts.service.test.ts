import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

describe('ContactsService', () => {

  let contactsService: ContactsService;
  let contacts: Contact[];

  beforeEach(() => {
    contactsService = new ContactsService();
    contactsService.loadContactsFromMemory();
    contacts = contactsService.getAll();
    // Mock console.table() to avoid error
    console.table = jest.fn()
  });

  test('should load all users from memory', () => {
    expect(contacts.length).toBe(4);
  });

  test('remove(): should remove contact from list', () => {
    contactsService.remove(1);
    expect(contacts.length).toBe(3);
  });

  test('getAll(): should get all contacts from contact list', () => {
    const contacts = contactsService.getAll();
    expect(contacts.length).toBe(4);
  });

  test('sortAlphabetically(): should get all contacts in alphabetic order', () => {
    contactsService.sortAlphabetically();
    const contacts = contactsService.getAll();
    expect(contacts[0].id).toBe(3);
  });

  test('add(): should add contact', () => {
    const newContact = {
      id: 5,
      firstName: 'Efirstname1',
      lastName: 'Lastname5',
      email: 'email5@domain.com',
      country: 'Spain'
    };
    contactsService.add(newContact);
    const contacts = contactsService.getAll();
    expect(contacts.length).toBe(5);
  });

  test('update(): should update contact', () => {
    const updatedContact = {
      id: 1,
      firstName: 'Efirstname1',
      lastName: 'Lastname5',
      email: 'email5@domain.com',
      country: 'Germany'
    };
    contactsService.update(updatedContact);
    contactsService.sortAlphabetically();
    const contacts: any[] = contactsService.getAll();
    expect(contacts[3].email).toBe('email5@domain.com');
  });

  test('isEmpty(): should check if contact list is empty', () => {
    const isEmpty: boolean = contactsService.isEmpty();
    expect(isEmpty).toBe(false);
  });

  test('capitalizeFirstLetter(): should capitalize first letter of a string', () => {
    let userName: string = 'firstName';
    userName = ContactsService.capitalizeFirstLetter(userName);
    expect(userName).toBe('Firstname');
  });

  test('generateId(): should generate unique ids', () => {
    const id1 = ContactsService.generateId();
    const id2 = ContactsService.generateId();
    expect(id1).not.toEqual(id2);
  });

  test('isLocalStorageAvailable(): should check if browser localStorage is available', () => {
    const isLocalStorageAvailable: boolean = contactsService.isLocalStorageAvailable();
    expect(isLocalStorageAvailable).toBe(true);
  });

});