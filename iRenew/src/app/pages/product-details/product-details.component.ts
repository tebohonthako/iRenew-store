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
  specsString:string="";
  prodCategory:string="";
  items: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit() {
     this.activatedRoute.paramMap.subscribe(params => { this.productID = params.get('id')!; 
 
    
   });

   this.productService.getById(this.productID).subscribe((data:any)=>{this.product=data; this.specsString=data.specs.toString();
 
    
      this.prodCategory=data.category;
      const cleanedString = this.specsString.replace(/{|}/g, '');
      const keyValuePairs = cleanedString.split('","');


      this.items = keyValuePairs.map(pair => pair.replace(/"/g, ''));
    
    
   });
  

  }
  goBack(){
    this.router.navigate(['/products',this.prodCategory]);
  }
 
}

