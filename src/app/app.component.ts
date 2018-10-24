import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ContactsService } from '../services/contacts.service';
import { HomePage } from '../pages/home/home';
import { MenuController, NavController } from 'ionic-angular';
import { ContactPage } from '../pages/contact/contact';
import { Action } from '../models/action';
import { HelpPage } from '../pages/help/help';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = HomePage;
  @ViewChild('content') navCtrl: NavController;
  public devWidth;

  // tslint:disable-next-line
  constructor(private contactsService: ContactsService,
              private menuCtrl: MenuController,
              private platform: Platform) {

    /**
     * Just before unload the app, save the in-memory contact list to Local Storage
     */
    window.addEventListener('beforeunload', () => {
      contactsService.saveAll();
    });

    this.devWidth = this.platform.width();
  }

  onNewContact() {
    this.navCtrl.push(ContactPage, {action: Action.CREATE});
    this.menuCtrl.close();
  }

  onHelp() {
    this.navCtrl.push(HelpPage);
    this.menuCtrl.close();
  }

  ngDoCheck() {
    this.devWidth = this.platform.width();
  }
}

