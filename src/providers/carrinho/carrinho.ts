//Angular dependencies
import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
//RXJS dependencies
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise'
//Interfaces
import { iCarrinho } from './../../interfaces/iCarrinho';

@Injectable()
export class CarrinhoProvider {

  //Url da api
  public apiUrl: string = 'https://goodhomes.com.br/api'
  //Declara a variavel que receberá o token
  public token: string = ''
  //Declara a variavel que receberá o headers que será enviado para a requisição
  public headers: any

  constructor(
    //Importa HTTP e Header
    public http: HttpClient,
  ) {}

  //ERROR
  erro(error) {
    console.error(error)
    return Observable.throw(error.json().error || 'Server error')
  }

  //Método GET
  listaCarrinho(token):Observable<iCarrinho[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    })
    
    return this.http
      .get(`${this.apiUrl}/users/profile`, { headers: this.headers })
      .map(res =>  res)
      .catch(this.erro)
  }

  //Método Put
  atualizaCarrinho(data, token):Observable<iCarrinho[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    })
    
    return this.http
      .put(`${this.apiUrl}/users/profile`, data, { headers: this.headers })
      .map(res =>  res)
      .catch(this.erro)
  }

  //Método DELETE
  limpaCarrinho(token):Observable<iCarrinho[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    })

    let data = {}
    
    return this.http
      .put(`${this.apiUrl}/users/profile`, data, { headers: this.headers })
      .map(res =>  res)
      .catch(this.erro)
  }

  

}
