import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interface/product.model';
import { CartService } from 'src/app/services/cart.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produts-page',
  templateUrl: './produts-page.component.html',
  styleUrls: ['./produts-page.component.scss']
})
export class ProdutsPageComponent implements OnInit  {

  products: Product[] = [];
  private category:string="";

  constructor(private productService: ProductService, private cartService: CartService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('id')!;
    this.productService.getByCategory(this.category).subscribe((data: any) => {
      this.products = data; 
    });
    
  }

  // functionality to add items to the cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
