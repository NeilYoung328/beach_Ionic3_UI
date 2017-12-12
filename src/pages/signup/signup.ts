import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular'
import { TabsPage } from '../tabs/tabs'
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  PICTURE_RATIO = 1659/1200
  currentLanguage: string = 'en'
  shouldTop = document.body.clientHeight - document.body.clientWidth * this.PICTURE_RATIO + 'px'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //TODO: Implement auth
  doSignup() {
    this.navCtrl.push(TabsPage)
  }

  goLogin() {
    this.navCtrl.push(LoginPage)
  }

  //TODO: Implement Language menu
  showLanguageMenu() {
  }

}
