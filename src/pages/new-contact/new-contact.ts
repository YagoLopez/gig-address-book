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
  countries = ['Country1', 'Country2', 'Country3', 'Country4'];

  idControl = new FormControl();

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
    Validators.email
  ]);

  countryControl = new FormControl('', [
    Validators.required
  ]);

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
      this.action = contactData.action;
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

}
