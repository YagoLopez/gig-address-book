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
        this.contactForm = new FormGroup({
            firstName: new FormControl('', [
                Validators.required,
                Validators.minLength(this.MIN_LENGTH)
            ]),
            lastName: new FormControl('', [
                Validators.required,
                Validators.minLength(this.MIN_LENGTH)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.minLength(this.MIN_LENGTH),
                Validators.email
            ]),
            country: new FormControl('', [
                Validators.required
            ]),
        });
        this.firstNameControl = this.contactForm.get('firstName');
        this.lastNameControl = this.contactForm.get('lastName');
        this.emailControl = this.contactForm.get('email');
        this.countryControl = this.contactForm.get('country');
        debugger;
        var contactData = this.navParams.data;
        if (contactData) {
            console.log('this.navParams.data', contactData);
            // this.contact = contactData;
            this.firstNameControl.setValue(contactData.firstName);
            this.lastNameControl.setValue(contactData.lastName);
            this.emailControl.setValue(contactData.email);
            this.countryControl.setValue(contactData.country);
        }
        // else
        // {
        //   this.contact  = {
        //     firstName: this.firstNameControl.value,
        //     lastName: this.lastNameControl.value,
        //     email: this.emailControl.value,
        //     country: this.countryControl.value
        //   };
        // }
    }
    NewContactPage.prototype.onSubmitContactForm = function () {
        if (this.contactForm.valid) {
            console.log('valid contact form, submitting');
            this.contactsService.add(this.contactForm.value);
            //todo: borrar
            console.log('contact list', this.contactsService.getAll());
            this.navCtrl.pop();
        }
        else {
            //todo: refactorizar
            console.log('invalid form');
        }
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