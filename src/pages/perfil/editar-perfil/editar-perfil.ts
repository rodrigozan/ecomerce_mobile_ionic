import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {}

}
