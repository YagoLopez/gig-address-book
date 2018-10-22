// todo: validation forms
// todo: usar libreria para countries
// todo: poner boton borrar esquina superior izquierda en vista contacto
// todo: contacts list añadir clase on hover contact
// todo: url routes
// todo: search in list
// todo: mejorar tests
// todo: e2e testing
// todo: complete unit testing
// todo: use functional programming: spread operator, lodash functional, etc. Avoid mutating functions
// todo: arreglar lo de los imports con require para jest

import { Contact } from '../models/contact';
// Jest testing framework needs lodash library be loaded using "require()"
// @ts-ignore
const sortBy = require('lodash/sortBy');
// @ts-ignore
const remove = require('lodash/remove');
// @ts-ignore
const findIndex = require('lodash/findIndex');
// @ts-ignore
const isEqual = require('lodash/isEqual');

// import sortBy from 'lodash/sortBy';
// import remove from 'lodash/remove';
// import findIndex from 'lodash/findIndex';
// import isEqual from 'lodash/isEqual';


/**
 * Contacts Service implements the Repository Pattern for Contact model domain (aka entity)
 */
export class ContactsService{

  private contacts: Contact[];

  constructor() {
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
      {firstName: 'Cfirstname1', lastName: 'Lastname1', email: 'email1@domain.com', country: 'Country1'},
      {firstName: 'Dfirstname2', lastName: 'Lastname2', email: 'email2@domain.com', country: 'Country2'},
      {firstName: 'Afirstname3', lastName: 'Lastname3', email: 'email3@domain.com', country: 'Country3'},
      {firstName: 'Bfirstname4', lastName: 'Lastname4', email: 'email4@domain.com', country: 'Country4'},
    ]
  }

  /**
   * Loads the contact list from Local Storage
   */
  loadContactsFromLocalStorage(): void {
    this.contacts = JSON.parse(localStorage.getItem('contacts')) as Contact[];
    this.sortAlphabetically();
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
    } catch (e) {
      return false;
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
      firstName: ContactsService.capitalizeFirstLetter(contact.firstName),
      lastName: ContactsService.capitalizeFirstLetter(contact.lastName),
    };
    this.contacts = [...this.contacts, contact];
    this.sortAlphabetically();
    this.logToConsole();
  }

  remove(id: string): void {
    try {
      remove(this.contacts, {email: id});
    } catch (error) {
      throw error;
    }
    this.logToConsole();
  }

  update(contact: Contact): boolean {
    const oldContactIndex = findIndex(this.contacts, {email: contact.email});
    const oldContact = this.contacts[oldContactIndex];
    if (isEqual(oldContact, contact)) {
      window.alert('Data has not changed');
      return false;
    } else {
      oldContact.firstName = ContactsService.capitalizeFirstLetter(contact.firstName);
      oldContact.lastName = ContactsService.capitalizeFirstLetter(contact.lastName);
      oldContact.email = ContactsService.capitalizeFirstLetter(contact.email);
      oldContact.country = ContactsService.capitalizeFirstLetter(contact.country);
      this.sortAlphabetically();
      this.logToConsole();
      return true;
    }
  }

  saveAll() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    try {
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    } catch (error) {
      throw error;
    }
  }

  removeAll() {
    try {
      this.contacts.length = 0;
      localStorage.clear();
    } catch (error) {
      throw error;
    }
    this.logToConsole();
  }

  isEmpty(): boolean {
    return this.contacts.length == 0;
  }

  static capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.toLocaleLowerCase().slice(1);
  }

  logToConsole() {
    console.log('✍ Contact List Log:');
    console.table(this.getAll());
  }
}