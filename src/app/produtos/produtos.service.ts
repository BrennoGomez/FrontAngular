import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Produto} from "./produto/produto.model"
import {MenuItem} from '../produto-detail/menu-item/menu-item.model'

import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class ProdutosService {

    constructor(private http: Http){}

    produtos(search?: string): Observable<Produto[]> {
      return this.http.get(`${MEAT_API}/produtos`, {params: {q: search}})
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    produtoById(id: string): Observable<Produto>{
      return this.http.get(`${MEAT_API}/produtos/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfProduto(id: string): Observable<any>{
      return this.http.get(`${MEAT_API}/produtos/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfProduto(id: string): Observable<MenuItem[]>{
      return this.http.get(`${MEAT_API}/produtos/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

}
