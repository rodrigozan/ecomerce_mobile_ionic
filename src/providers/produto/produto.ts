//Angular dependencies
import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Http, Headers } from '@angular/http';
//RXJS dependencies
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise'
//Ionic dependencies
import { Storage } from '@ionic/storage'
//Interfaces
import { iProduto } from '../../interfaces/iProduto'

@Injectable()
export class ProdutoProvider {

  //Url da api
  public apiUrl: string = 'https://goodhomes.com.br/api'
  //Declara a variavel que receberá o token
  public token: string = ''
  //Declara a variavel que receberá o headers que será enviado para a requisição
  public headers: any

  constructor(
    //Importa HTTP e Header
    public http: HttpClient,
    public oldHttp: Http,
    //Importa o storage
    @Inject('StorageUsuario') private storageUsuario: Storage,
  ) {}

  //Métodos GET

  primeiraListaProdutos(token):Observable<iProduto[]> {

    let headers = new HttpHeaders({
      'x-access-token': token
    });

    return this.http
    .get(`${this.apiUrl}/products/1/6`, { headers: headers })
    .map(res =>  res)
    .catch(this.erro)
    
  }

  segundaListaProdutos(token):Observable<iProduto[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });
    
    return this.http
    .get(`${this.apiUrl}/products/2/6`, { headers: headers })
    .map(res =>  res)
    .catch(this.erro)
  }

  listaProduto(id, token):Observable<iProduto[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });
    
    return this.http
    .get(`${this.apiUrl}/products/${id}`, { headers: headers })
    .map(res =>  res)
    .catch(this.erro)
  }

  listaProdutosPromocao(token):Observable<iProduto[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });
    
    return this.http
    .get(`${this.apiUrl}/products/promocao/1/6`, { headers: headers })
    .map(res =>  res)
    .catch(this.erro)
  }

  listaProdutosLancamento(token):Observable<iProduto[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });
    
    return this.http
    .get(`${this.apiUrl}/products/lancamento/1/6`, { headers: headers })
    .map(res =>  res)
    .catch(this.erro)
  }

  //Método PUT

  atualizaProduto(data, id, token):Observable<iProduto[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });

    return this.http
    .put(`${this.apiUrl}/products/${id}`, data, { headers: headers })
    .map(res =>  res)
    .catch(this.erro)
  }

  //Método DELETE

  deletaProduto(id, token):Observable<iProduto[]> {
    let headers = new HttpHeaders({
      'x-access-token': token
    });

    return this.http
    .delete(`${this.apiUrl}/products/${id}`, { headers: headers })
    .map(res =>  res)
    .catch(this.erro)
  }

  //ERROR

  erro(error) {
    console.error(error)
    return Observable.throw(error.json().error || 'Server error')
  }

}
