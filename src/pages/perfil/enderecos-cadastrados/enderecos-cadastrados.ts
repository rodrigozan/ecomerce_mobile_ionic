import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

/**
 * Generated class for the EnderecosCadastradosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enderecos-cadastrados',
  templateUrl: 'enderecos-cadastrados.html',
})
export class EnderecosCadastradosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnderecosCadastradosPage')
  }

}
