import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact';
import { DetailPage } from '../detail/detail';
import { NewContactPage } from '../new-contact/new-contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // urlAvatar: string = "https://loremflickr.com/100/100/face?random=1";
  urlAvatar: string = "assets/imgs/1.png";
  contacts: Contact[];

  constructor(public navCtrl: NavController, private contactsService: ContactsService) {
    contactsService.loadContactsFromLocalStorage();
    if (contactsService.isEmpty()) {
      contactsService.loadContactsFromMemory()
    }
    contactsService.sortAlphabetically();
    this.contacts = contactsService.getAll();
    console.log('contacts', this.contacts);
  }


  onViewContactDetail(contact: Contact) {
    this.navCtrl.push(DetailPage, contact);
  }

  onNewContact() {
    this.navCtrl.push(NewContactPage);
  }

  onRemoveContact(email: string, slidingContact: any) {
    if (window.confirm('Confirm Delete Contact')) {
      this.contactsService.remove(email);
      return;
    } else {
      slidingContact.close();
    }
  }

  onRemoveAll() {
    if (window.confirm('Confirm remove all contacts')) {
      this.contactsService.removeAll();
    }
  }

  isContactListEmpty(): boolean {
    return this.contactsService.isEmpty();
  }
}
