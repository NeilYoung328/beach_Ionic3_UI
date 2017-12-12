import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular'
import { SignupPage } from '../signup/signup'
import { TabsPage } from '../tabs/tabs'

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
    this.navCtrl.push(TabsPage)
  }

  goSignup() {
    this.navCtrl.push(SignupPage)
  }

  //TODO: Implement Language menu
  showLanguageMenu() {
  }

}
