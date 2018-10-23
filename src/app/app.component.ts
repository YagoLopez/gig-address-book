import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
import { ContactsService } from '../services/contacts.service';
import { HomePage } from '../pages/home/home';
import { MenuController, NavController } from 'ionic-angular';
import { NewContactPage } from '../pages/new-contact/new-contact';
import { Action } from '../models/action';
import { HelpPage } from '../pages/help/help';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = HomePage;
  @ViewChild('content') navCtrl: NavController;
  public devWidth;

  constructor(private contactsService: ContactsService,
              private menuCtrl: MenuController,
              private platform: Platform /*, statusBar: StatusBar*/
              ) {
/*
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
    });
*/

    /**
     * Just before unload the app, save the in-memory contact list to Local Storage
     */
    window.addEventListener('beforeunload', () => {
      contactsService.saveAll();
    });

    this.devWidth = this.platform.width();
  }

  onNewContact() {
    this.navCtrl.push(NewContactPage, {action: Action.CREATE});
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

