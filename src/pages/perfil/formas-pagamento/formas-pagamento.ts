import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

/**
 * Generated class for the FormasPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formas-pagamento',
  templateUrl: 'formas-pagamento.html',
})
export class FormasPagamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormasPagamentoPage')
  }

}
