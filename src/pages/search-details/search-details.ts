import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { SearchResultsPage } from '../search-results/search-results'

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
  country: string = 'Romania'
  place: string = 'Mamaia'
  persons = Array.from(new Array(8), (val,index) => index+1)
  types = ['Umbrella', 'Baldaquin', 'Sunbed', 'Pool']
  zones = ['Near Sea', 'Middle', 'At the Back']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  next() {
    this.navCtrl.push(SearchResultsPage)
  }

}
