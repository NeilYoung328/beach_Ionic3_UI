import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { SearchResultsPage } from '../search-results/search-results'

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
