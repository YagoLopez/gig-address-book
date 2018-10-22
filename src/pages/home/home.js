var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsService } from '../../services/contacts.service';
import { NewContactPage } from '../new-contact/new-contact';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, contactsService) {
        this.navCtrl = navCtrl;
        this.contactsService = contactsService;
        // urlAvatar: string = "https://loremflickr.com/100/100/face?random=1";
        this.urlAvatar = "assets/imgs/1.png";
        console.log('HomePage constructor');
        contactsService.loadContactsFromLocalStorage();
        if (contactsService.isEmpty()) {
            contactsService.loadContactsFromMemory();
        }
        contactsService.sortAlphabetically();
        this.contacts = contactsService.getAll();
        console.log('contacts', this.contacts);
    }
    HomePage.prototype.onViewContact = function (contact) {
        this.navCtrl.push(NewContactPage, contact);
    };
    HomePage.prototype.onNewContact = function () {
        this.navCtrl.push(NewContactPage);
    };
    HomePage.prototype.onRemoveContact = function (email, slidingContact) {
        if (window.confirm('Confirm Delete Contact')) {
            this.contactsService.remove(email);
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
        return this.contactsService.isEmpty();
    };
    /**
     * Update contacts each time view is entered
     */
    HomePage.prototype.ionViewWillEnter = function () {
        this.contacts = this.contactsService.getAll();
    };
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