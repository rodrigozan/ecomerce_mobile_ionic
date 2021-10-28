//Angular Dependencies
import { Component } from '@angular/core'
//Ionic Dependencies
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'
//Providers
import { UsuarioProvider } from '../../../providers/usuario/usuario'
//Pages
import { LoginPage } from '../../login/login'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@IonicPage()
@Component({
  selector: 'page-cadastra-endereco',
  templateUrl: 'cadastra-endereco.html',
})
export class CadastraEnderecoPage {

  public dadosCadastrados = this.navParams.get('dadosCadastrados')
  public resultadoCadastro = this.navParams.get('resultadoCadastro')

  public cep : any
  public rua: any
  public complemento : any
  public numero : any
  public bairro : any
  public cidade : any
  public uf : any
  public tipoEndereco: any
  public residencialTrue: boolean = false
  public trabalhosTrue: boolean = false

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: HttpClient,
    //Provider usuário
    private _usuario: UsuarioProvider 
  ) {}

  private callService(cep: String): any{
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

  public getEndereco() {
    this.callService(this.cep);
  }

  cadastraEndereco() {

    let info = {
      cep: this.cep,
      rua: this.rua,
      complemento: this.complemento,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade,
      uf: this.uf,
      tipoEndereco: this.tipoEndereco
    }

    this._usuario
    .cadastraEndereco(info)
      .subscribe(
        data => {
          console.log(`Endereço cadastrado: ${data}`)
          if(data) {
          }
        },
        erro => console.log(erro)
      )

      this._usuario
      .cadastraEnderecoPrincipal(info, this.dadosCadastrados._id)
        .subscribe(
          data => {
            console.log(`Endereço principal cadastrado: ${data}`)
            if(data) {
            }
          },
          erro => console.log(erro)
        )
  }

  public imgResidencialEhTrue() {
    this.residencialTrue = true;
    this.trabalhosTrue = false;
    this.tipoEndereco = 'Residencial';
  }

  public imgTrabalhoEhTrue() {
    this.residencialTrue = false;
    this.trabalhosTrue = true;
    this.tipoEndereco = 'Profissional';
  }

  concluiSemEndereco() {
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {}

}
