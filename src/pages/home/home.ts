//Angular Dependencies
import { Component } from '@angular/core';
//Ionic Dependencies
import { NavController, NavParams } from 'ionic-angular';
//Pages
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public data = new Date;
  public diaDaSemana = this.data.getDay()

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    setTimeout(() => {
      this.navCtrl.setRoot(WelcomePage)
    }, 4000);
  }

  ionViewDidLoad() {}

}

