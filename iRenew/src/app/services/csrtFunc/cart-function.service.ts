import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interface/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartFunctionService { // a service that handles addToCart, removeFromCart

  constructor(
  
  ) { }

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  getItems(){
    return this.productList.asObservable();
  }

  setProducts(product : any){
    this.cartItemList.push(...product);
  }

  addToCart(product: Product ){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotal();
  }

  getTotal(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })

    return grandTotal;
  }

  removeCartItem(product : any){
    this.cartItemList.map((a:any, index: any) => {
      if(product.id === a.id) {
        this.cartItemList.splice (index, 1);
      }
    })

    this.productList.next (this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
