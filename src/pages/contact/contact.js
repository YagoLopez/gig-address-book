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
import { NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { duplicatedEmailValidator } from '../../validators/duplicatedEmail.validator';
import Countries from 'country-list';
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, contactsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactsService = contactsService;
        this.MIN_LENGTH = 4;
        this.countries = Countries().getData();
        this.idControl = new FormControl({ disabled: true });
        this.firstNameControl = new FormControl('', [
            Validators.required,
            Validators.minLength(this.MIN_LENGTH)
        ]);
        this.lastNameControl = new FormControl('', [
            Validators.required,
            Validators.minLength(this.MIN_LENGTH)
        ]);
        this.emailControl = new FormControl('', [
            Validators.required,
            Validators.email,
            duplicatedEmailValidator(this.contactsService.getAll())
        ]);
        this.countryControl = new FormControl('', Validators.required);
        this.contactForm = new FormGroup({
            id: this.idControl,
            firstName: this.firstNameControl,
            lastName: this.lastNameControl,
            email: this.emailControl,
            country: this.countryControl
        });
        var contactData = this.navParams.data;
        this.action = contactData.action;
        if (this.action === 'UPDATE') {
            this.action = contactData.action;
            this.idControl.setValue(contactData.id);
            this.firstNameControl.setValue(contactData.firstName);
            this.lastNameControl.setValue(contactData.lastName);
            this.emailControl.setValue(contactData.email);
            this.countryControl.setValue(contactData.country);
        }
    }
    ContactPage.prototype.onSaveContact = function () {
        if (this.contactForm.valid) {
            if (this.action === 'CREATE') {
                this.contactsService.add(this.contactForm.value);
                this.goToPreviousPage();
            }
            if (this.action === 'UPDATE') {
                if (this.contactsService.update(this.contactForm.value)) {
                    this.goToPreviousPage();
                }
                else {
                    window.alert('Data has not changed');
                }
            }
        }
        else {
            console.log('Invalid Form');
        }
    };
    ContactPage.prototype.onRemoveContact = function () {
        if (window.confirm('Confirm Delete Contact')) {
            this.contactsService.remove(this.contactForm.value.id);
            this.goToPreviousPage();
        }
    };
    ContactPage.prototype.onCancelBtn = function () {
        this.goToPreviousPage();
    };
    ContactPage.prototype.goToPreviousPage = function () {
        this.navCtrl.pop();
    };
    ContactPage.prototype.ionViewWillEnter = function () {
        if (this.action === undefined) {
            this.goToPreviousPage();
        }
        // Due to ionic bug
        if (this.firstNameControl.errors && this.firstNameControl.untouched) {
            this.firstNameControl.setErrors({});
        }
        if (this.lastNameControl.errors && this.lastNameControl.untouched) {
            this.lastNameControl.setErrors({});
        }
        if (this.emailControl.errors && this.emailControl.untouched) {
            this.emailControl.setErrors(null);
        }
        if (this.countryControl.errors && this.countryControl.untouched) {
            this.countryControl.setErrors({});
        }
    };
    ContactPage = __decorate([
        Component({
            templateUrl: 'contact.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ContactsService])
    ], ContactPage);
    return ContactPage;
}());
export { ContactPage };
//# sourceMappingURL=contact.js.map