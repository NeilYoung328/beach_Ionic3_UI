import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterPopoverPage } from './filter-popover';

@NgModule({
  declarations: [
    FilterPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterPopoverPage),
  ],
})
export class CalendarPopoverPageModule {}
