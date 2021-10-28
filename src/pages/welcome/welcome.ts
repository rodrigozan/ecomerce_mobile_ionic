//Angular Dependencies
import { Component } from '@angular/core';
//Ionic Dependencies
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Pages
import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  public irParaCadastro() {
    this.navCtrl.push(CadastroPage)
  }

  public irParaLogin() {
    this.navCtrl.push(LoginPage)
  }

  ionViewDidLoad() {}

}
