import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchDetailsPage } from './search-details';

@NgModule({
  declarations: [
    SearchDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchDetailsPage),
  ],
})
export class SearchDetailsPageModule {}
