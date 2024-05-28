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
  category:string="";

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data; 
      console.log(data);
    });
    this.productService.getByCategory()
  }

  // functionality to add items to the cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
