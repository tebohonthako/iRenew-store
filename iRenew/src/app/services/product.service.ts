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
  productsList: any[]=[];
 

  constructor(private http: HttpClient) { 
    this.getProducts().subscribe((data: any) => {
      this.products = data.product;
      console.log(data.product)
    });
  }

  ngOnIt(){
    this.getProducts().subscribe(product => {
      this.productsList = product;
    });
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  getProduct(): any[]{
    return this.productsList;
  }

}
