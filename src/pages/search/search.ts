import { Component } from '@angular/core'
import { IonicPage, NavController, PopoverController, App, NavParams } from 'ionic-angular'
import * as moment from 'moment'

import { CalendarPopoverPage } from './calendar-popover/calendar-popover'
import { LoginPage } from '../login/login'
import { SearchDetailsPage } from '../search-details/search-details'

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

  public date = { from: '', to: '', period: 0 }

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public popoverCtrl: PopoverController,
    public navParams: NavParams,
  ) { }

  presentCalendar() {
    let popover = this.popoverCtrl.create(CalendarPopoverPage)
    popover.present()
    popover.onDidDismiss((date: { from: moment.Moment; to: moment.Moment }) => {
      if (date) {
        this.date.from = date.from.format('DD/MM/YYYY')
        this.date.to = date.to.format('DD/MM/YYYY')
        this.date.period = date.to.diff(date.from, 'days') + 1
      }
    })
  }

  goBack() {
    if(this.navCtrl.canGoBack()) {
      this.navCtrl.pop()
    } else {
      this.appCtrl.getRootNav().push(LoginPage, {}, { direction: 'back' })
    }
  }

  next() {
    this.navCtrl.push(SearchDetailsPage)
  }

}
