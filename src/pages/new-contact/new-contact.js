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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
var NewContactPage = /** @class */ (function () {
    function NewContactPage(navCtrl, navParams, contactsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactsService = contactsService;
        this.MIN_LENGTH = 4;
        this.firstNameControl = new FormControl('', [
            Validators.required,
            Validators.minLength(this.MIN_LENGTH)
        ]);
        this.lastNameControl = new FormControl('', [
            Validators.required,
            Validators.minLength(this.MIN_LENGTH)
        ]);
        this.emailControl = new FormControl('', [
            Validators.email
        ]);
        this.countryControl = new FormControl('', [
            Validators.required
        ]);
        this.contactForm = new FormGroup({
            firstName: this.firstNameControl,
            lastName: this.lastNameControl,
            email: this.emailControl,
            country: this.countryControl
        });
        this.countries = ['Country1', 'Country2', 'Country3', 'Country4'];
        var contactData = this.navParams.data;
        this.action = contactData.action;
        if (this.action === 'UPDATE') {
            this.action = contactData.action;
            this.firstNameControl.setValue(contactData.firstName);
            this.lastNameControl.setValue(contactData.lastName);
            this.emailControl.setValue(contactData.email);
            this.countryControl.setValue(contactData.country);
        }
    }
    NewContactPage.prototype.onSaveContact = function () {
        if (this.contactForm.valid) {
            if (this.action === 'CREATE') {
                this.contactsService.add(this.contactForm.value);
                this.goToPreviousPage();
            }
            if (this.action === 'UPDATE') {
                if (this.contactsService.update(this.contactForm.value)) {
                    this.goToPreviousPage();
                }
            }
        }
        else {
            console.log('Invalid Form');
            debugger;
        }
    };
    NewContactPage.prototype.onDeleteContact = function () {
        if (window.confirm('Confirm Delete Contact')) {
            this.contactsService.remove(this.contactForm.value.email);
            this.goToPreviousPage();
        }
    };
    NewContactPage.prototype.onCancelBtn = function () {
        this.goToPreviousPage();
    };
    NewContactPage.prototype.goToPreviousPage = function () {
        this.navCtrl.pop();
    };
    NewContactPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-new-contact',
            templateUrl: 'new-contact.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ContactsService])
    ], NewContactPage);
    return NewContactPage;
}());
export { NewContactPage };
//# sourceMappingURL=new-contact.js.map