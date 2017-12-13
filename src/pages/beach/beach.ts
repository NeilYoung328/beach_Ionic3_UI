import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-beach',
  templateUrl: 'beach.html',
})
export class BeachPage {
  beachSection: string = 'overview'
  menu = [
    {
      category: 'sandwiches',
      itemsShown: false,
      items: [{
          name: 'Prosciuto & Funghi',
          img: '../assets/imgs/dishes/pizza1.png',
          description: '30 cm, Mozzarela, Ham, Mushrooms, Tomato Sauce',
          price: 26.00,
        },
        {
          name: 'Pasta Alfredo',
          img: '../assets/imgs/dishes/pizza1.png',
          description: 'Fettuccine Pasta With Fresh Mushroom in Fresh Creamy',
          price: 37.00,
        }]
    },
    {
      category: 'snacks',
      itemsShown: false,
      items: [{
          name: 'Prosciuto & Funghi',
          img: '../assets/imgs/dishes/pizza1.png',
          description: '30 cm, Mozzarela, Ham, Mushrooms, Tomato Sauce',
          price: 26.00,
        },
        {
          name: 'Pasta Alfredo',
          img: '../assets/imgs/dishes/pizza1.png',
          description: 'Fettuccine Pasta With Fresh Mushroom in Fresh Creamy',
          price: 37.00,
        }]
    },
    {
      category: 'pizza',
      itemsShown: false,
      items: [{
          name: 'Prosciuto & Funghi',
          img: '../assets/imgs/dishes/pizza1.png',
          description: '30 cm, Mozzarela, Ham, Mushrooms, Tomato Sauce',
          price: 26.00,
        },
        {
          name: 'Pasta Alfredo',
          img: '../assets/imgs/dishes/pizza1.png',
          description: 'Fettuccine Pasta With Fresh Mushroom in Fresh Creamy',
          price: 37.00,
        }]
    },
    {
      category: 'coffee / chocolate',
      itemsShown: false,
      items: [{
          name: 'Prosciuto & Funghi',
          img: '../assets/imgs/dishes/pizza1.png',
          description: '30 cm, Mozzarela, Ham, Mushrooms, Tomato Sauce',
          price: 26.00,
        },
        {
          name: 'Pasta Alfredo',
          img: '../assets/imgs/dishes/pizza1.png',
          description: 'Fettuccine Pasta With Fresh Mushroom in Fresh Creamy',
          price: 37.00,
        }]
    }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeachPage');
  }

  toggleItems(item) {
    item.itemsShown = !item.itemsShown
    this.menu.forEach((element) => {
      if (element != item) element.itemsShown = false
    })
  }


}
