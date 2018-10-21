// todo: e2e testing
// todo: complete unit testing
// todo: validation forms
// todo: url routes
import * as _ from 'lodash';
/**
 * Contacts Repository Service
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
            var msg = 'Browser Local Storage not availalble';
            window.alert(msg);
            throw new Error(msg);
        }
    }
    /**
     * Creates the contact list in memory for testing purposes
     */
    ContactsService.prototype.loadContactsFromMemory = function () {
        this.contacts = [
            { firstName: 'cFirstName1', lastName: 'LastName1', email: 'email1@domain.com', country: 'Country1' },
            { firstName: 'dFirstName2', lastName: 'LastName2', email: 'email2@domain.com', country: 'Country2' },
            { firstName: 'aFirstName3', lastName: 'LastName3', email: 'email3@domain.com', country: 'Country3' },
            { firstName: 'bFirstName4', lastName: 'LastName4', email: 'email4@domain.com', country: 'Country4' },
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
        this.contacts = _.sortBy(this.contacts, ['firstName', 'lastName']);
    };
    ContactsService.prototype.add = function (contact) {
        this.contacts.push(contact);
        this.sortAlphabetically();
    };
    ContactsService.prototype.remove = function (id) {
        if (window.confirm('Confirm Delete Contact')) {
            try {
                _.remove(this.contacts, { email: id });
            }
            catch (error) {
                throw new Error(error);
            }
        }
    };
    // todo: revisar
    ContactsService.prototype.update = function (emailAsId) {
        var contactIndex = _.findIndex(this.contacts, { email: emailAsId });
        this.sortAlphabetically();
        return this.contacts[contactIndex];
    };
    ContactsService.prototype.saveAll = function () {
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    };
    return ContactsService;
}());
export { ContactsService };
//# sourceMappingURL=contacts.service.js.map