import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the FooterPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-footer',
  templateUrl: 'footer.html'
})
export class FooterPage {

  vitrineRoot = 'VitrinePage'
  perfilRoot = 'PerfilPage'
  infoRoot = 'InfoPage'
  notificacoesRoot = 'NotificacoesPage'
  mensagensRoot = 'MensagensPage'


  constructor(public navCtrl: NavController) {}

}
