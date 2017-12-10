import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

import { LoginPage } from '../pages/login/login'
import { TabsPage } from '../pages/tabs/tabs'
import { SearchPage } from '../pages/search/search'
import { SearchDetailsPage } from '../pages/search-details/search-details'
import { CalendarPopoverPage } from '../pages/search/calendar-popover/calendar-popover'
import { CartPage } from '../pages/cart/cart'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { CalendarModule } from 'ion2-calendar'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    SearchPage,
    SearchDetailsPage,
    CalendarPopoverPage,
    CartPage,
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    SearchPage,
    SearchDetailsPage,
    CalendarPopoverPage,
    CartPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
