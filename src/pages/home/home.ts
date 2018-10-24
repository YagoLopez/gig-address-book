import { Component, ViewChild } from '@angular/core';
import { NavController, Searchbar } from 'ionic-angular';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact';
import { Action } from '../../models/action';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private _contacts: Contact[];
  urlAvatar: string = "assets/imgs/1.png";
  @ViewChild('searchBar') searchBar: Searchbar;

  get contacts(): Contact[] {
    return this._contacts;
  };

  set contacts(contacts: Contact[]) {
    this._contacts = contacts;
  }

  constructor(public navCtrl: NavController, private contactsService: ContactsService) {
    // todo: borrar
    contactsService.loadContactsFromLocalStorage();
    if (contactsService.isEmptyContactList()) {
      contactsService.loadContactsFromMemory();
    }
    contactsService.sortAlphabetically();
    this.contacts = this.contactsService.getAll();
    this.contactsService.logToConsole();
  }

  onViewContact(contact: Contact) {
    this.navCtrl.push(ContactPage, {...contact, action: Action.UPDATE});
  }

  onNewContact() {
    this.navCtrl.push(ContactPage, {action: Action.CREATE});
  }

  onRemoveContact(id: string | number, slidingContact: any) {
    if (window.confirm('Confirm Delete Contact')) {
      this.contactsService.remove(id);
      this.contacts = this.contactsService.getAll();
      this.searchBar.value = '';
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
    return this.contactsService.isEmptyContactList();
  }

  ionViewWillEnter() {
    this.contacts = this.contactsService.getAll();
    this.searchBar.value = '';
  }

  filterContacts($event: any): void {

    // Reset items back to all of the items
    this.contacts = this.contactsService.getAll();

    // set val to the value of the searchbar
    const val = $event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.contacts = this.contacts.filter((contact) => {
        return ((contact.firstName + ' ' +contact.lastName).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
