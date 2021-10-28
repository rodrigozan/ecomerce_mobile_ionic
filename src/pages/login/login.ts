//Angular Dependencies
import { Component } from '@angular/core';
//Ionic Dependencies
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Providers
import { UsuarioProvider } from '../../providers/usuario/usuario'
//Pages
import { VitrinePage } from '../vitrine/vitrine';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string = ''
  public password: string = ''

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //Providers
    private _usuario: UsuarioProvider
    ) {
  }

  public login() {

    let info = {
      email: this.email,
      password: this.password,
    }

    this._usuario
    .login(info)
      .then(
        data => {
          console.log(data)
          this.navCtrl.setRoot(VitrinePage)
        },
        erro => console.log(erro)
      )
  }

  ionViewDidLoad() {}

}
