import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interface/product.model';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { CartFunctionService } from 'src/app/services/csrtFunc/cart-function.service';

@Component({
  selector: 'app-produts-page',
  templateUrl: './produts-page.component.html',
  styleUrls: ['./produts-page.component.scss']
})
export class ProdutsPageComponent implements OnInit  {

  products: Product[] = [];


  constructor(private productService: ProductService,
    private cart: CartService, 
    private cartFunction: CartFunctionService
  ) { }

  ngOnInit(): void {
      this.productService.getProducts().subscribe((data: any) => {
      this.products = data.product; // Extract the array from the "product" key
      console.log(data.product)

      this.cart.getItems().subscribe((data: any) => { //items for the cart to go into
        this.products = data.product;
        console.log(data.product);
      }) 
    })
  }

  addToCart(id: any){
    this.cartFunction.addToCart(id);
  }


}
