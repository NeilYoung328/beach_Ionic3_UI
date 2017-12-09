import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, App, NavParams } from 'ionic-angular';

import { CalendarPopoverPage } from './calendar-popover/calendar-popover';
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
    public popoverCtrl: PopoverController,
    public navParams: NavParams,
  ) { }

  presentCalendar() {
    let popover = this.popoverCtrl.create(CalendarPopoverPage)
    popover.present()
  }

  goBack() {
    if(this.navCtrl.canGoBack()) {
      this.navCtrl.pop()
    } else {
      this.appCtrl.getRootNav().push(LoginPage, {}, { direction: 'back' })
    }
  }

}
