import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-filter-popover',
  templateUrl: 'filter-popover.html',
})
export class FilterPopoverPage {
  options = [{
    name: 'cash',
    fullName: 'cash',
  },
  {
    name: 'credit',
    fullName: 'credit card',
  },
  {
    name: 'bar',
    fullName: 'bar',
  },
  {
    name: 'food',
    fullName: 'restaurant',
  },
  {
    name: 'shower',
    fullName: 'shower',
  },
  {
    name: 'wifi',
    fullName: 'wifi',
  },
  {
    name: 'music',
    fullName: 'music',
  },
  {
    name: 'baldaquin',
    fullName: 'baldaquin',
  }]

  doClose() {
    this.viewCtrl.dismiss()
  }

  constructor(public viewCtrl: ViewController) { }

}
