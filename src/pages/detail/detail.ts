import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/contact';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  contact: Contact;

  constructor(/* public navCtrl: NavController, */ public navParams: NavParams) {
    this.contact = this.navParams.data as Contact;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
