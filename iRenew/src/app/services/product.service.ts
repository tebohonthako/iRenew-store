import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../interface/product.model';

@Injectable({
  providedIn: 'root'
})

// <!-- Creating a service to fetch the product data from the JSON file using HttpClient-->   return this.http.get(`${this.apiUrl}/products`);
export class ProductService {
  private apiURL = "http://localhost:8080/irenew/products/";

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
   // console.log(this.http.get<Product[]>(`${this.apiURL}`));
    return this.http.get<Product[]>(this.apiURL);
  }

  getByCategory(category:String){
  
    return this.http.get<Product[]>(`${this.apiURL}category/${category}`);
   }
   getAll(category:String){
  
    return this.http.get<Product[]>(`${this.apiURL}${category}`);
   }
   
   

}
