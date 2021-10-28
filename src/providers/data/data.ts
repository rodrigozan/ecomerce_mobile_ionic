import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core'

@Injectable()
export class DataProvider {

  constructor(
    public http: HttpClient
  ) {
    console.log('Entrou no data provideer')
  }

}
