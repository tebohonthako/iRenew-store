import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.model';

@Injectable({
  providedIn: 'root'
})

// <!-- Creating a service to fetch the product data from the JSON file using HttpClient-->
export class ProductService {
  private apiURL = 'assets/product.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

}
