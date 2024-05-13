import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../interface/product.model';

@Injectable({
  providedIn: 'root'
})

// <!-- Creating a service to fetch the product data from the JSON file using HttpClient-->
export class ProductService {
  private apiUrl = 'http://localhost:3000/product'
  //private apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  
  //Get one product by ID 
  getProduct(productID: string): Observable<Product> {
      return this.http.get<Product>(`${this.apiUrl}/?id=${productID}`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(
        map((products: any[]) => products.filter(product => product.category === category))
      );
  }
  

  deleteProduct(productId: number){
      return this.http.delete<Product>('');
  }

}
