import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: string = '';
  products: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => { this.category = params.get('category') || ''; 
      this.getProductsByCategory();
    });

  }

  getProductsByCategory() {
    // get products based on the category retrieved from the route
    this.productService.getProductsByCategory(this.category).subscribe(products => {
      this.products = products;
      console.log(this.category)
    });
  }
}
