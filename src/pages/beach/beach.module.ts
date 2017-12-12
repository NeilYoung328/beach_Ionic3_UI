import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { BeachPage } from './beach'

@NgModule({
  declarations: [
    BeachPage,
  ],
  imports: [
    IonicPageModule.forChild(BeachPage),
  ],
  exports: [
    BeachPage,
  ]
})
export class BeachPageModule {}
