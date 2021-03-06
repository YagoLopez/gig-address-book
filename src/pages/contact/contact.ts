import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { duplicatedEmailValidator } from '../../validators/duplicatedEmail.validator';
import Countries from 'country-list';

@Component({
  templateUrl: 'contact.html',
})
export class ContactPage {

  MIN_LENGTH = 4;
  action: string;
  countries = Countries().getData();

  idControl = new FormControl({disabled: true});

  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.MIN_LENGTH)
  ]);

  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.MIN_LENGTH)
  ]);

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    duplicatedEmailValidator(this.contactsService.getAll())
  ]);

  countryControl = new FormControl('', Validators.required);

  contactForm = new FormGroup({
    id: this.idControl,
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    country: this.countryControl
  });

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private contactsService: ContactsService) {

    const contactData = this.navParams.data;
    this.action = contactData.action;
    if (this.action === 'UPDATE') {
      this.idControl.setValue(contactData.id);
      this.firstNameControl.setValue(contactData.firstName);
      this.lastNameControl.setValue(contactData.lastName);
      this.emailControl.setValue(contactData.email);
      this.countryControl.setValue(contactData.country);
    }
  }


  onSaveContact() {
    if (this.contactForm.valid) {
      if (this.action === 'CREATE') {
        this.contactsService.add(this.contactForm.value);
        this.goToPreviousPage();
      }
      if (this.action === 'UPDATE') {
        if(this.contactsService.update(this.contactForm.value)) {
          this.goToPreviousPage();
        } else {
          window.alert('Data has not changed');
        }
      }
    } else {
      console.log('Invalid Form');
    }
  }

  onRemoveContact() {
    if (window.confirm('Confirm Delete Contact')) {
      this.contactsService.remove(this.contactForm.value.id);
      this.goToPreviousPage();
    }
  }

  onCancelBtn() {
    this.goToPreviousPage();
  }

  goToPreviousPage() {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
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
  }

}
