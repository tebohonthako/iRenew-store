import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItems } from 'src/app/interface/cartModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private jsonUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getItems(): Observable<CartItems[]> {
    return this.http.get<CartItems[]>(this.jsonUrl);
  }

 


}
