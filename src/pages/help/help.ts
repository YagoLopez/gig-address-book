import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) {
  }

  onCloseBtn() {
    this.navCtrl.pop();
    this.menuCtrl.close();
  }
}
