import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';

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
