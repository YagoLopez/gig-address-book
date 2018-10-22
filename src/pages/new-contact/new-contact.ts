import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';

@IonicPage()
@Component({
  selector: 'page-new-contact',
  templateUrl: 'new-contact.html',
})
export class NewContactPage {

  MIN_LENGTH = 4;

  action: string;

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
  ]);

  countryControl = new FormControl('', [
    Validators.required
  ]);

  contactForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    country: this.countryControl
  });

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private contactsService: ContactsService) {

// debugger
    const contactData = this.navParams.data;
    this.action = contactData.action;
    if (this.action === 'UPDATE') {
      console.log('this.navParams.data', contactData);
      this.action = contactData.action;
      this.firstNameControl.setValue(contactData.firstName);
      this.lastNameControl.setValue(contactData.lastName);
      this.emailControl.setValue(contactData.email);
      this.countryControl.setValue(contactData.country);
    }
  }

  onSubmitContactForm() {
debugger
    if (this.contactForm.valid) {
      console.log('valid contact form, submitting');
      if (this.action === 'CREATE') {
        this.contactsService.add(this.contactForm.value);
      }
      if (this.action === 'UPDATE') {
        this.contactsService.update(this.contactForm.value);
      }
      //todo: borrar
      console.log('contact list', this.contactsService.getAll());
      this.navCtrl.pop();
    } else {
      //todo: refactorizar
      console.log('invalid form');
    }
  }
}
