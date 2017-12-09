import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from 'ion2-calendar';

import { LoginPage } from '../login/login';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public navParams: NavParams,
    public modalCtrl: ModalController,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  goBack() {
    if(this.navCtrl.canGoBack()) {
      this.navCtrl.pop()
    } else {
      this.appCtrl.getRootNav().push(LoginPage, {}, { direction: 'back' })
    }
  }

}
