import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  PICTURE_RATIO = 1659/1200
  currentLanguage: any
  shouldTop = document.body.clientHeight - document.body.clientWidth * this.PICTURE_RATIO + 'px'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentLanguage = 'en'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //TODO: Implement auth
  doLogin() {
    console.log('doLogin() TODO')
    this.navCtrl.push(TabsPage)
  }

  //TODO: Implement Language menu
  showLanguageMenu() {
    console.log('showLanguageMenu() TODO')
  }

}
