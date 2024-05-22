import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product?: Product;
  productID: string ='';
  

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => { this.productID = params.get('id') || ''; 
      this.getProduct();
    });
  }

  getProduct() {
    // get products based on the category retrieved from the route
    this.productService.getProduct(this.productID).subscribe(product => {
      this.product = product;
    });
  }
}

