import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.model';

@Injectable({
  providedIn: 'root'
})

// <!-- Creating a service to fetch the product data from the JSON file using HttpClient-->
export class ProductService {
  private apiURL = 'http://localhost:8080/api/v1/auth/products';
  products: any[] = [];

  constructor(private http: HttpClient) { 
    this.getProducts().subscribe((data: any) => {
      this.products = data.product;
      console.log(data.product)
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

}
