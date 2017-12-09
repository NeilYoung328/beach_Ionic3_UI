import { Component } from '@angular/core';
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

  dateRange: { from: string, to: string }
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  }
  type: 'string'
  format: 'DD/MM/YYYY'

  constructor() { }

}
