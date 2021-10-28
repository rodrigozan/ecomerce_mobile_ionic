//Angular dependencies
import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Http, Headers } from '@angular/http';
//RXJS dependencies
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise'
//Ionic dependencies
import { Storage } from '@ionic/storage'
//Interfaces
import { iUser } from '../../interfaces/iUser'

@Injectable()
export class UsuarioProvider {

  //Url da api
  public apiUrl: string = 'https://goodhomes.com.br/api'
  //Declara a variavel que receberá o token
  public token: string = ''
  //Declara as variaveis que receberão os dados
  public nomeCompleto: string = ''
  public email: string = ''
  public password: string = ''

  public headers

  constructor(
    //Importa HTTP e Header
    public http: HttpClient,
    public loginHttp: Http,
    //Importa o storage
    @Inject('StorageUsuario') private storageUsuario: Storage,
  ) {
    this.storageUsuario.get('token').then( 
      (token) => {
        this.token = token
      }
    )
  }

  //Seta os parametros do headers
  private setHeaders() {
    let headers = new HttpHeaders()
    headers.set('Content-Type', 'application/json charset=utf-8')
    headers.set('x-access-token', this.token)
    this.headers = headers
  }

  //ERROR
  erro(error) {
    console.error(error)
    return Observable.throw(error.json().error || 'Server error')
  }
  
  //Métodos GET

  listaUsuarios(token):Observable<iUser[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });
    
    return this.http
      .get(`${this.apiUrl}/users`, { headers: this.headers })
      .map(res =>  res)
      .catch(this.erro)
  }

  listaUsuario(token):Observable<iUser[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });
    
    return this.http
      .get(`${this.apiUrl}/users/profile`, { headers: this.headers })
      .map(res =>  res)
      .catch(this.erro)
  }

  //Métodos POST

  cadastraUsuario(data):Observable<iUser[]> {
    this.setHeaders()

    return this.http
      .post(`${this.apiUrl}/users`, data, { headers: this.headers })
      .map(res =>  res)
      .catch(this.erro)
  }

  cadastraEndereco(data, token):Observable<iUser[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });

    return this.http
      .post(`${this.apiUrl}/users/endereco/add/`, data, { headers: this.headers })
      .map(res =>  res)
      .catch(this.erro)
  }

  //Método PUT

  cadastraEnderecoPrincipal(data, item, token):Observable<iUser[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });

    return this.http
      .put(`${this.apiUrl}/users/endereco/principal/${item}`, data, { headers: this.headers })
      .map(res =>  res)
      .catch(this.erro)
  }

  atualizaUsuario(data, token):Observable<iUser[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });

    return this.http
      .put(`${this.apiUrl}/users`, data, { headers: this.headers })
      .map(res =>  res)
      .catch(this.erro)
  }

  //LOGIN - Método POST

  login(data) {
    this.setHeaders()

    return new Promise(resolve => {
      this.loginHttp
        .post(this.apiUrl+'/login', data, { headers: this.headers })
        .subscribe(result => {
          resolve(result);
          let token = result.headers.get('x-access-token');
          if(token != null){
            this.storageUsuario.set('token', token);
            localStorage.setItem('token', token)
          }
        }, err => {
          console.error('Deu ruim', err);
        })
      ;
    })
  }
  
}
