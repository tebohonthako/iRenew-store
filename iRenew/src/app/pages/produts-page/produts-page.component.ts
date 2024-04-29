import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interface/product.model';

@Component({
  selector: 'app-produts-page',
  templateUrl: './produts-page.component.html',
  styleUrls: ['./produts-page.component.scss']
})
export class ProdutsPageComponent implements OnInit  {

  products: Product[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.product; // Extract the array from the "product" key
    });
  }
}
