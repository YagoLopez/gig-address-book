// todo: e2e testing
// todo: complete unit testing
// todo: validation forms
// todo: url routes
// todo: use functional programming: spread operator, lodash functional, etc. Avoid mutating functions
// todo: arreglar lo de los imports con require para jest
// todo: search in list
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// @ts-ignore
var sortBy = require('lodash/sortBy');
// @ts-ignore
var remove = require('lodash/remove');
// @ts-ignore
var findIndex = require('lodash/findIndex');
// import sortBy from 'lodash/sortBy';
// import remove from 'lodash/remove';
// import findIndex from 'lodash/findIndex';
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
            { firstName: 'Cfirstname1', lastName: 'Lastname1', email: 'email1@domain.com', country: 'Country1' },
            { firstName: 'Dfirstname2', lastName: 'Lastname2', email: 'email2@domain.com', country: 'Country2' },
            { firstName: 'Afirstname3', lastName: 'Lastname3', email: 'email3@domain.com', country: 'Country3' },
            { firstName: 'Bfirstname4', lastName: 'Lastname4', email: 'email4@domain.com', country: 'Country4' },
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
        // To sort aphabetically is needed to capitalize first letter
        // todo: borrar
        // debugger
        contact = __assign({}, contact, { firstName: ContactsService.capitalizeFirstLetter(contact.firstName), lastName: ContactsService.capitalizeFirstLetter(contact.lastName) });
        this.contacts = this.contacts.concat([contact]);
        this.sortAlphabetically();
    };
    ContactsService.prototype.remove = function (id) {
        try {
            remove(this.contacts, { email: id });
        }
        catch (error) {
            throw error;
        }
    };
    // todo: revisar
    ContactsService.prototype.update = function (emailAsId) {
        var contactIndex = findIndex(this.contacts, { email: emailAsId });
        this.sortAlphabetically();
        return this.contacts[contactIndex];
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
    };
    ContactsService.prototype.isEmpty = function () {
        return this.contacts.length == 0;
    };
    ContactsService.capitalizeFirstLetter = function (text) {
        return text.charAt(0).toUpperCase() + text.toLocaleLowerCase().slice(1);
    };
    return ContactsService;
}());
export { ContactsService };
//# sourceMappingURL=contacts.service.js.map