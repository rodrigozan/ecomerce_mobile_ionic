//Angular Dependencies
import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
//Ionic Dependencies
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'
//Providers
import { UsuarioProvider } from '../../providers/usuario/usuario'
//Pages
import { CadastraEnderecoPage } from './cadastra-endereco/cadastra-endereco'

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public apiUrl = 'https://goodhomes.com.br/api/'

  public dadosDoFacebook = this.navParams.get('data')
  public isLogged: boolean = false


  public nomeCompleto = ''
  public email = ''
  public password = ''
  public confirmaPassword = ''

  public registerForm: any
  messageNome = ''
  messageEmail = ''
  messagePassword = ''
  messageConfirma = ''
  messageSenhasIguais = ''
  errorNome = false
  errorEmail = false
  errorPassword = false
  errorConfirma = false
  errorSenhasIguais = false

  public model

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    //private _facebook: Facebook,
    public alertCtrl: AlertController,
    public http: HttpClient,
    //Providers
    private _userProvider: UsuarioProvider
  ) {

    this.registerForm = formBuilder.group({
      nomeCompleto: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      confirmaPassword: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    })

    if(this.dadosDoFacebook) {
      this.nomeCompleto = this.dadosDoFacebook.nome
      this.email =  this.dadosDoFacebook.email
      this.password =  this.dadosDoFacebook.senha
      this.confirmaPassword =  this.dadosDoFacebook.senha
    }
  }

  validaCadastro() {
    let { nomeCompleto, email, password, confirmaPassword } = this.registerForm.controls

    if (!this.registerForm.valid) {

      if (!nomeCompleto.valid) {
        this.errorNome = true
        this.messageNome = "Por favor, digite seu nome"
      } else {
        this.messageNome = ""
      }

      if (!email.valid) {
        this.errorEmail = true
        this.messageEmail = "Por favor, digite seu email"
      } else {
        this.messageEmail = ""
      }

      if (!password.valid) {
        this.errorPassword = true
        this.messagePassword ="A senha precisa ser preenchida e ter de 6 a 20 caracteres"
      } else {
        this.messagePassword = ""
      }

      if (!confirmaPassword.valid) {
        this.errorConfirma = true
        this.messageConfirma ="Por favor, preencha o campo de confirmação de senha"
      } else {
        this.messageConfirma = ""
      }

      if(email != confirmaPassword){
        this.errorSenhasIguais = true
          this.messageSenhasIguais = "As senhas não conferem"
      }else {
        this.messageSenhasIguais = ""
      }

    }
    else {
      this.cadastro()
    }

  }

  // método de cadastro
  public cadastro() {

    let info = {
      nomeCompleto: this.nomeCompleto,
      email: this.email,
      password: this.password,
    }

    this._userProvider
    .cadastraUsuario(info)
      .subscribe(
        data => {
          console.log(data)
          this.navCtrl.push(CadastraEnderecoPage)
        },
        erro => console.log(erro)
      )
  }

  public goBack() {
    this.navCtrl.pop()
  }

  ionViewDidLoad() {}

}
