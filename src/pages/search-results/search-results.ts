import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams } from 'ionic-angular';

import { FilterPopoverPage } from './filter-popover/filter-popover'
import { BeachPage } from '../beach/beach'

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  public country: string = 'Romania'
  public place: string = 'Mamaia'
  public beaches = [
    {
      title: 'Ammos Beach',
      seats: 410,
      sunbed: 42,
      umbrella: 20,
      baldaquin: 8,
      reviews: 12,
      rating: 2,
      img: '../assets/imgs/beaches/beach1.png',
      options: ['cash', 'credit', 'food', 'shower', 'wifi'],
    },
    {
      title: 'Crazy Beach',
      seats: 300,
      sunbed: 33,
      umbrella: 11,
      baldaquin: 1,
      reviews: 22,
      rating: 5,
      img: '../assets/imgs/beaches/beach2.png',
      options: ['cash', 'bar', 'food', 'shower', 'wifi', 'music'],
    },
    {
      title: 'Ammos Beach',
      seats: 410,
      sunbed: 42,
      umbrella: 20,
      baldaquin: 8,
      reviews: 12,
      rating: 3,
      img: '../assets/imgs/beaches/beach1.png',
      options: ['cash', 'credit', 'bar', 'food', 'shower', 'wifi', 'music'],
    },
    {
      title: 'Crazy Beach',
      seats: 300,
      sunbed: 33,
      umbrella: 11,
      baldaquin: 1,
      reviews: 22,
      rating: 1,
      img: '../assets/imgs/beaches/beach2.png',
      options: ['cash', 'credit', 'bar', 'wifi', 'music'],
    },
    {
      title: 'Ammos Beach',
      seats: 410,
      sunbed: 42,
      umbrella: 20,
      baldaquin: 8,
      reviews: 12,
      rating: 5,
      img: '../assets/imgs/beaches/beach1.png',
      options: ['cash', 'credit', 'bar', 'food'],
    },
    {
      title: 'Crazy Beach',
      seats: 300,
      sunbed: 33,
      umbrella: 11,
      baldaquin: 1,
      reviews: 22,
      rating: 2,
      img: '../assets/imgs/beaches/beach2.png',
      options: ['cash', 'shower', 'wifi', 'music'],
    },
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
  ) { }

  showFilter() {
    let popover = this.popoverCtrl.create(FilterPopoverPage)
    popover.present()
    popover.onDidDismiss(() => {
    })
  }

  next() {
    this.navCtrl.push(BeachPage)
  }

}
