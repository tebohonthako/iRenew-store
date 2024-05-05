import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interface/product.model';
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-produts-page',
  templateUrl: './produts-page.component.html',
  styleUrls: ['./produts-page.component.scss']
})
export class ProdutsPageComponent implements OnInit  {

  products: Product[] = [];


  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.product; 
      console.log(data.product)
    });
  }

  // functionality to add items to the cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
