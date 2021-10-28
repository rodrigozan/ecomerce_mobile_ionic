import { Component } from '@angular/core';
import { PerfilPage } from '../../pages/perfil/perfil';
import { VitrinePage } from './../../pages/vitrine/vitrine';
import { InfoPage } from '../../pages/info/info';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  constructor(
    public navCtrl: NavController
  ) {}

  public navHome() {
    this.navCtrl.setRoot(VitrinePage);
  }

  public navInfo() {
    this.navCtrl.setRoot(InfoPage);
  }

  public navPerfil() {
    this.navCtrl.setRoot(PerfilPage);
  }

}
