import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

describe('ContactsService', () => {

  let contactsService: ContactsService;
  let contacts: Contact[];

  beforeEach(() => {
    contactsService = new ContactsService();
    contactsService.loadContactsFromMemory();
    contacts = contactsService.getAll();
    // Mock console.table() to avoid error. Jest doesnt run in real browser
    console.table = jest.fn();
  });

  test('should load all users from memory', () => {
    expect(contacts.length).toBe(4);
  });

  test('remove(): should remove contact from list', () => {
    contactsService.remove(1);
    expect(contacts.length).toBe(3);
  });

  test('remove(): should not remove non existent contact from list', () => {
    contactsService.remove('x');
    expect(contacts.length).toBe(4);
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

  test('update(): should update contact when contact data changes', () => {
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

  test('update(): should not update contact when contact data does not change', () => {
    const updatedContact = {
      "id": 1,
      "firstName": "Cfirstname1",
      "lastName": "Lastname1",
      "email": "email1@domain.com",
      "country": "ES"
    };
    contactsService.update(updatedContact);
    contactsService.sortAlphabetically();
    const contacts: any[] = contactsService.getAll();
    const oldContact = contacts[2];
    expect(oldContact).toStrictEqual(updatedContact);
  });

  test('isEmpty(): should check if contact list is empty', () => {
    const isEmpty: boolean = contactsService.isEmptyContactList();
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

  test('saveAll(): should save all contacts to localStorage', () => {
    const KEY = 'contacts';
    const VALUE = JSON.stringify(contactsService.getAll());
    contactsService.saveAll();
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });

  test('removeAll(): should remove all contacts from localStorage', () => {
    const KEY = 'contacts';
    contactsService.removeAll();
    expect(localStorage.__STORE__[KEY]).toBe(undefined);
    expect(Object.keys(localStorage.__STORE__).length).toBe(0);
  });

  test('loadContactsFromLocalStorage(): should load contacts from localStorage', () => {
    const contact = {
      id: 1,
      firstName: 'firstName1',
      lastName: 'lastName1',
      email: 'email1@domain.com',
      country: 'ES'
    };
    contactsService.removeAll();
    contactsService.add(contact);
    contactsService.saveAll();
    contactsService.loadContactsFromLocalStorage();
    const contacts = contactsService.getAll();
    expect(contacts.length).toBe(1);
    expect(contacts[0].firstName).toBe('Firstname1');
    expect(contacts[0].lastName).toBe('Lastname1');
    expect(contacts[0].email).toBe('email1@domain.com');
    expect(contacts[0].country).toBe('ES');
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });


});
