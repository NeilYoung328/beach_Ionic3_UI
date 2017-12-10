import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';

/**
 * Generated class for the CalendarPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendar-popover',
  templateUrl: 'calendar-popover.html',
})
export class CalendarPopoverPage {

  dateRange: { from: '', to: '' }
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  }

  doClose() {
    this.viewCtrl.dismiss(this.dateRange)
  }

  constructor(public viewCtrl: ViewController) { }

}
