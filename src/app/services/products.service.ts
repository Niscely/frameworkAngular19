import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiURI: string = "http://damp-spire-59848.herokuapp.com/api/products"
  
   products: product[] = []
  constructor(
    private http: HttpClient
  ) { 

  }

  getAllProducts(){
    return this.http.get(this.apiURI)
  }



  getProductById(id: string){
    return this.http.get(`${this.apiURI}/${id}`)
  }
}