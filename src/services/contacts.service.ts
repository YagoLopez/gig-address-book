import { Contact } from '../models/contact';
// Jest testing framework needs to use "require()" to load "lodash" library instead of es6 imports
// @ts-ignore
const sortBy = require('lodash/sortBy');
// @ts-ignore
const remove = require('lodash/remove');
// @ts-ignore
const findIndex = require('lodash/findIndex');
// @ts-ignore
const isEqual = require('lodash/isEqual');


/**
 * Contacts Service implements the Repository Pattern for Contact model domain (aka entity)
 */
export class ContactsService{

  private contacts: Contact[];

  constructor() {
    /* istanbul ignore next */
    if (!this.isLocalStorageAvailable()) {
      const msg = 'Local Storage not availalble in browser';
      window.alert(msg);
      throw new Error(msg);
    }
  }

  /**
   * Creates the contact list in memory for testing purposes
   */
  loadContactsFromMemory(): void {
    this.contacts = [
      {id: 1, firstName: 'Cfirstname1', lastName: 'Lastname1', email: 'email1@domain.com', country: 'ES'},
      {id: 2, firstName: 'Dfirstname2', lastName: 'Lastname2', email: 'email2@domain.com', country: 'FR'},
      {id: 3, firstName: 'Afirstname3', lastName: 'Lastname3', email: 'email3@domain.com', country: 'GB'},
      {id: 4, firstName: 'Bfirstname4', lastName: 'Lastname4', email: 'email4@domain.com', country: 'US'}
    ]
  }

  /**
   * Loads the contact list from Local Storage
   */
  loadContactsFromLocalStorage(): void {
    const contactsData: string = localStorage.getItem('contacts');
    if (contactsData !== undefined) {
      this.contacts = JSON.parse(localStorage.getItem('contacts')) as Contact[];
    }
  }

  /**
   * Check if localStorage is available in browser
   * Local storage is needed to persist contact list
   */
  isLocalStorageAvailable = (): boolean => {
    const test = 'test';
    try {
      localStorage.setItem(test, 'test');
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      return false; /* istanbul ignore line */
    }
  };

  getAll(): Contact[] {
    return this.contacts;
  }

  sortAlphabetically(): void {
    this.contacts = sortBy(this.contacts, ['firstName', 'lastName']);
  }

  add(contact: Contact): void {
    contact = {
      ...contact,
      id: ContactsService.generateId(),
      firstName: ContactsService.capitalizeFirstLetter(contact.firstName),
      lastName: ContactsService.capitalizeFirstLetter(contact.lastName),
    };
    this.contacts = [...this.contacts, contact];
    this.sortAlphabetically();
    this.logToConsole();
  }

  remove(id: string | number): void {
    remove(this.contacts, {id: id});
    this.logToConsole();
  }

  update(contact: Contact): boolean {
    const oldContactIndex = findIndex(this.contacts, {id: contact.id});
    const oldContact = this.contacts[oldContactIndex];
    if (isEqual(oldContact, contact)) {
      return false;
    } else {
      oldContact.firstName = ContactsService.capitalizeFirstLetter(contact.firstName);
      oldContact.lastName = ContactsService.capitalizeFirstLetter(contact.lastName);
      oldContact.email = contact.email;
      oldContact.country = contact.country;
      this.sortAlphabetically();
      this.logToConsole();
      return true;
    }
  }

  /**
   * Save all contacts to localStorage
   */
  saveAll() {
    if (this.contacts !== undefined) {
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
  }

  /**
   * Remove all contacts from localStorage
   */
  removeAll() {
    try {
      this.contacts.length = 0;
      localStorage.clear();
    } catch (error) {
      throw error;
    }
    this.logToConsole();
  }

  isEmptyContactList(): boolean {
    return this.contacts && this.contacts.length == 0;
  }

  static capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.toLocaleLowerCase().slice(1);
  }

  logToConsole() {
    console.log('✍ Contact List Log');
    console.table(this.getAll());
  }

  static generateId() {
    return Math.random().toString(36).substr(2, 8);
  }

}
