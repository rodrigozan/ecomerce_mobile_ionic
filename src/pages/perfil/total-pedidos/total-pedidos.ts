import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-total-pedidos',
  templateUrl: 'total-pedidos.html',
})
export class TotalPedidosPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {}

}
