import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  edit: boolean = false
  totalPrice: number = 52
  items = [
    {
      title: 'Orange Fresh',
      quantity: 2,
      price: 12,
      img: '../assets/imgs/dishes/pizza1.png',
    },
    {
      title: 'Mint Lemonade',
      quantity: 2,
      price: 14,
      img: '../assets/imgs/dishes/pizza1.png',
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toggleEdit() {
    this.edit = !this.edit
  }

}
