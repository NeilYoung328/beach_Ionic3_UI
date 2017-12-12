import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { SignupPage } from '../pages/signup/signup'
import { BeachPage } from '../pages/beach/beach'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SignupPage

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault()
      splashScreen.hide()
    })
  }
}
