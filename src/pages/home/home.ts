import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact';
import { Action } from '../../models/action';
import { NewContactPage } from '../new-contact/new-contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // urlAvatar: string = "https://loremflickr.com/100/100/face?random=1";
  urlAvatar: string = "assets/imgs/1.png";

  get contacts(): Contact[] {
    return this.contactsService.getAll();
  };

  constructor(public navCtrl: NavController, private contactsService: ContactsService) {
    console.log('HomePage constructor');
    contactsService.loadContactsFromLocalStorage();
    if (contactsService.isEmpty()) {
      contactsService.loadContactsFromMemory()
    }
    contactsService.sortAlphabetically();
    console.log('constructor - contacts', this.contacts);
  }


  // getContacts(): Contact[] {
  //   return this.contactsService.getAll();
  // }

  onViewContact(contact: Contact) {
    this.navCtrl.push(NewContactPage, {...contact, action: Action.UPDATE});
  }

  onNewContact() {
    this.navCtrl.push(NewContactPage, {action: Action.CREATE});
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

  /**
   * Update contacts each time view is entered
   */
  ionViewWillEnter() {
// debugger
    console.log('ion view will enter. contacts: ', this.contacts);
  }

}
