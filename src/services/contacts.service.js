// todo: complete unit testing
// todo: cambiar nombre new-contact pagina
// todo: usar libreria para countries
// todo: contacts list añadir clase on hover contact
// todo: search in list
// todo: e2e testing
// todo: arreglar lo de los imports con require para jest
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// Jest testing framework needs lodash library to be loaded using "require()"
// @ts-ignore
var sortBy = require('lodash/sortBy');
// @ts-ignore
var remove = require('lodash/remove');
// @ts-ignore
var findIndex = require('lodash/findIndex');
// @ts-ignore
var isEqual = require('lodash/isEqual');
// import sortBy from 'lodash/sortBy';
// import remove from 'lodash/remove';
// import findIndex from 'lodash/findIndex';
// import isEqual from 'lodash/isEqual';
/**
 * Contacts Service implements the Repository Pattern for Contact model domain (aka entity)
 */
var ContactsService = /** @class */ (function () {
    function ContactsService() {
        /**
         * Check if localStorage is available in browser
         * Local storage is needed to persist contact list
         */
        this.isLocalStorageAvailable = function () {
            var test = 'test';
            try {
                localStorage.setItem(test, 'test');
                localStorage.removeItem(test);
                return true;
            }
            catch (e) {
                return false;
            }
        };
        if (!this.isLocalStorageAvailable()) {
            var msg = 'Local Storage not availalble in browser';
            window.alert(msg);
            throw new Error(msg);
        }
    }
    /**
     * Creates the contact list in memory for testing purposes
     */
    ContactsService.prototype.loadContactsFromMemory = function () {
        this.contacts = [
            { id: 1, firstName: 'Cfirstname1', lastName: 'Lastname1', email: 'email1@domain.com', country: 'Spain' },
            { id: 2, firstName: 'Dfirstname2', lastName: 'Lastname2', email: 'email2@domain.com', country: 'France' },
            { id: 3, firstName: 'Afirstname3', lastName: 'Lastname3', email: 'email3@domain.com', country: 'Germany' },
            { id: 4, firstName: 'Bfirstname4', lastName: 'Lastname4', email: 'email4@domain.com', country: 'USA' }
        ];
    };
    /**
     * Loads the contact list from Local Storage
     */
    ContactsService.prototype.loadContactsFromLocalStorage = function () {
        this.contacts = JSON.parse(localStorage.getItem('contacts'));
        this.sortAlphabetically();
    };
    ContactsService.prototype.getAll = function () {
        return this.contacts;
    };
    ContactsService.prototype.sortAlphabetically = function () {
        this.contacts = sortBy(this.contacts, ['firstName', 'lastName']);
    };
    ContactsService.prototype.add = function (contact) {
        contact = __assign({}, contact, { id: ContactsService.generateId(), firstName: ContactsService.capitalizeFirstLetter(contact.firstName), lastName: ContactsService.capitalizeFirstLetter(contact.lastName) });
        this.contacts = this.contacts.concat([contact]);
        this.sortAlphabetically();
        this.logToConsole();
    };
    ContactsService.prototype.remove = function (id) {
        try {
            remove(this.contacts, { id: id });
        }
        catch (error) {
            throw error;
        }
        this.logToConsole();
    };
    ContactsService.prototype.update = function (contact) {
        var oldContactIndex = findIndex(this.contacts, { id: contact.id });
        var oldContact = this.contacts[oldContactIndex];
        if (isEqual(oldContact, contact)) {
            window.alert('Data has not changed');
            return false;
        }
        else {
            oldContact.firstName = ContactsService.capitalizeFirstLetter(contact.firstName);
            oldContact.lastName = ContactsService.capitalizeFirstLetter(contact.lastName);
            oldContact.email = contact.email;
            oldContact.country = contact.country;
            this.sortAlphabetically();
            this.logToConsole();
            return true;
        }
    };
    ContactsService.prototype.saveAll = function () {
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        try {
            localStorage.setItem('contacts', JSON.stringify(this.contacts));
        }
        catch (error) {
            throw error;
        }
    };
    ContactsService.prototype.removeAll = function () {
        try {
            this.contacts.length = 0;
            localStorage.clear();
        }
        catch (error) {
            throw error;
        }
        this.logToConsole();
    };
    ContactsService.prototype.isEmpty = function () {
        return this.contacts.length == 0;
    };
    ContactsService.capitalizeFirstLetter = function (text) {
        return text.charAt(0).toUpperCase() + text.toLocaleLowerCase().slice(1);
    };
    ContactsService.prototype.logToConsole = function () {
        console.log('✍ Contact List Log:');
        console.table(this.getAll());
    };
    ContactsService.generateId = function () {
        return Math.random().toString(36).substr(2, 8);
    };
    return ContactsService;
}());
export { ContactsService };
//# sourceMappingURL=contacts.service.js.map