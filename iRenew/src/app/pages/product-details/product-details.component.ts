import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import * as stringify from 'json-stringify-safe';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product?: Product;
  productID: string ='';
  specsString:string="";
  items: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit() {
     this.activatedRoute.paramMap.subscribe(params => { this.productID = params.get('id')!; 
 
    
   });

   this.productService.getById(this.productID).subscribe((data:any)=>{this.product=data; this.specsString=data.specs.toString();
    console.log(this.specsString);
    
      // Replace curly braces and split the string into an array
      const cleanedString = this.specsString.replace(/{|}/g, '');
      const keyValuePairs = cleanedString.split('","');

      // Remove any leading or trailing quotes from each key-value pair
      this.items = keyValuePairs.map(pair => pair.replace(/"/g, ''));
      console.log(this.items);
    
   });
  

  }
 
}

