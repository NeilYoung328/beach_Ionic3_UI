import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = CartPage;
  // tab3Root = ContactPage;
  // tab4Root =
  // tab5Root =

  constructor() {

  }
}
