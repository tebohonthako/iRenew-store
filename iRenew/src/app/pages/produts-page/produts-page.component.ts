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
  data: any[] = [];


  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: any[]) => {
        this.data = response;
        console.log('My products:', this.data);
      },
      (error) => {
        console.error('Error fetching favorite products:', error);
      }
    );
  }

  // functionality to add items to the cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
