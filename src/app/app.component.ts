import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { LoginPage } from '../pages/login/login'
import { SearchDetailsPage } from '../pages/search-details/search-details'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage
  // rootPage:any = SearchDetailsPage

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault()
      splashScreen.hide()
    })
  }
}
