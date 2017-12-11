import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  PICTURE_RATIO = 1659/1200
  currentLanguage: string = 'en'
  shouldTop = document.body.clientHeight - document.body.clientWidth * this.PICTURE_RATIO + 'px'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
