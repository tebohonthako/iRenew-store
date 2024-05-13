import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  products: Product[] = [];
  categoryItem: { [category: string]: Product } = {};

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;

      this.products.forEach(product => {
        if (!this.categoryItem[product.category]) {
          this.categoryItem[product.category] = product;
        }
      });
    });
  }

  onCategoryClick(category: string) {
    this.router.navigate(['/category', category]);
  }
}
