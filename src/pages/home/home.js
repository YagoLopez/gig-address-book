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
import { DetailPage } from '../detail/detail';
import { NewContactPage } from '../new-contact/new-contact';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, contactsService) {
        this.navCtrl = navCtrl;
        this.contactsService = contactsService;
        // urlAvatar: string = "https://loremflickr.com/100/100/face?random=1";
        this.urlAvatar = "assets/imgs/1.png";
        contactsService.loadContactsFromLocalStorage();
        if (contactsService.getAll().length == 0) {
            contactsService.loadContactsFromMemory();
        }
        contactsService.sortAlphabetically();
        this.contacts = contactsService.getAll();
        console.log('contacts', this.contacts);
    }
    HomePage.prototype.onViewContactDetail = function (contact) {
        this.navCtrl.push(DetailPage, contact);
    };
    HomePage.prototype.onNewContact = function () {
        this.navCtrl.push(NewContactPage);
    };
    HomePage.prototype.onRemoveContact = function (email) {
        this.contactsService.remove(email);
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