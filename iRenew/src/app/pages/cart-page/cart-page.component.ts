import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.model';
import { CartService } from 'src/app/services/cart-service/cart.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{

cartItems: Product[] = [];

  constructor(private cart: CartService,){}

  products: Product[] = [] ;

  ngOnInit(): void {
      this.cart.getItems().subscribe ((data: any) =>{
        this.products = data.product;
      });
  }


}
