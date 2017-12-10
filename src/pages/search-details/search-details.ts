import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

/**
 * Generated class for the SearchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-details',
  templateUrl: 'search-details.html',
})
export class SearchDetailsPage {
  public country: string = 'Romania'
  public place: string = 'Mamaia'
  public persons = Array.from(new Array(8), (val,index) => index+1)
  public types = ['Umbrella', 'Baldaquin', 'Sunbed', 'Pool']
  public zones = ['Near Sea', 'Middle', 'At the Back']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
