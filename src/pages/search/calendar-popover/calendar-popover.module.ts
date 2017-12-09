import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPopoverPage } from './calendar-popover';

@NgModule({
  declarations: [
    CalendarPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPopoverPage),
  ],
})
export class CalendarPopoverPageModule {}
