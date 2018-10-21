// todo: e2e testing
// todo: complete unit testing
// todo: validation forms
// todo: url routes

import { Contact } from '../models/contact';
import * as _ from 'lodash';


/**
 * Contacts Repository Service
 */
export class ContactsService{

  private contacts: Contact[];

  constructor() {
    if (!this.isLocalStorageAvailable()) {
      const msg = 'Browser Local Storage not availalble';
      window.alert(msg);
      throw new Error(msg);
    }
  }

  /**
   * Creates the contact list in memory for testing purposes
   */
  loadContactsFromMemory(): void {
    this.contacts = [
      {firstName: 'cFirstName1', lastName: 'LastName1', email: 'email1@domain.com', country: 'Country1'},
      {firstName: 'dFirstName2', lastName: 'LastName2', email: 'email2@domain.com', country: 'Country2'},
      {firstName: 'aFirstName3', lastName: 'LastName3', email: 'email3@domain.com', country: 'Country3'},
      {firstName: 'bFirstName4', lastName: 'LastName4', email: 'email4@domain.com', country: 'Country4'},
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
    this.contacts = _.sortBy(this.contacts, ['firstName', 'lastName']);
  }

  add(contact: Contact): void {
    this.contacts.push(contact);
    this.sortAlphabetically();
  }

  remove(id: string): void {
    try {
      _.remove(this.contacts, {email: id});
    } catch (error) {
      throw error;
    }
  }

  // todo: revisar
  update(emailAsId: string): Contact {
    const contactIndex: number = _.findIndex(this.contacts, {email: emailAsId});
    this.sortAlphabetically();
    return this.contacts[contactIndex];
  }

  saveAll() {
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
  }

  isEmpty(): boolean {
    return this.contacts.length == 0;
  }
}