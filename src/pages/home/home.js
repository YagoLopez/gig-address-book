var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, Searchbar } from 'ionic-angular';
import { ContactsService } from '../../services/contacts.service';
import { Action } from '../../models/action';
import { ContactPage } from '../contact/contact';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, contactsService) {
        this.navCtrl = navCtrl;
        this.contactsService = contactsService;
        this.urlAvatar = "assets/imgs/1.png";
        // todo: borrar
        contactsService.loadContactsFromLocalStorage();
        if (contactsService.isEmptyContactList()) {
            contactsService.loadContactsFromMemory();
        }
        contactsService.sortAlphabetically();
        this.contacts = this.contactsService.getAll();
        this.contactsService.logToConsole();
    }
    Object.defineProperty(HomePage.prototype, "contacts", {
        get: function () {
            return this._contacts;
        },
        set: function (contacts) {
            this._contacts = contacts;
        },
        enumerable: true,
        configurable: true
    });
    ;
    HomePage.prototype.onViewContact = function (contact) {
        this.navCtrl.push(ContactPage, __assign({}, contact, { action: Action.UPDATE }));
    };
    HomePage.prototype.onNewContact = function () {
        this.navCtrl.push(ContactPage, { action: Action.CREATE });
    };
    HomePage.prototype.onRemoveContact = function (id, slidingContact) {
        if (window.confirm('Confirm Delete Contact')) {
            this.contactsService.remove(id);
            this.contacts = this.contactsService.getAll();
            this.searchBar.value = '';
            return;
        }
        else {
            slidingContact.close();
        }
    };
    HomePage.prototype.onRemoveAll = function () {
        if (window.confirm('Confirm remove all contacts')) {
            this.contactsService.removeAll();
        }
    };
    HomePage.prototype.isContactListEmpty = function () {
        return this.contactsService.isEmptyContactList();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.contacts = this.contactsService.getAll();
        this.searchBar.value = '';
    };
    HomePage.prototype.filterContacts = function ($event) {
        // Reset items back to all of the items
        this.contacts = this.contactsService.getAll();
        // set val to the value of the searchbar
        var val = $event.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.contacts = this.contacts.filter(function (contact) {
                return ((contact.firstName + ' ' + contact.lastName).toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    __decorate([
        ViewChild('searchBar'),
        __metadata("design:type", Searchbar)
    ], HomePage.prototype, "searchBar", void 0);
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, ContactsService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map