import { Component } from '@angular/core'

import { SearchPage } from '../search/search'
import { CartPage } from '../cart/cart'

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  isMenuShown: boolean = false

  tab1Root = SearchPage;
  tab2Root = CartPage;

  constructor() {

  }

  toggleMenu() {
    this.isMenuShown = !this.isMenuShown
  }
}
