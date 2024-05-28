import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interface/product.model';
import { CartService } from 'src/app/services/cart.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produts-page',
  templateUrl: './produts-page.component.html',
  styleUrls: ['./produts-page.component.scss']
})
export class ProdutsPageComponent implements OnInit  {

  products: Product[] = [];
  private category:string="";
  private id="";

  constructor(private productService: ProductService, private cartService: CartService,private route:ActivatedRoute,private router: Router) { }
  
  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('id')!;
    console.log(this.category);
    if(this.category.toString()!="all"){
    this.productService.getByCategory(this.category).subscribe((data: any) => {
      this.products = data; 
    });
  }else{
    this.productService.getAll(this.category).subscribe((data:any)=>{this.products=data});
  }
    
  }
 goToDetails(id:any){
  console.log("testclick");
  this.router.navigate(["/productdetails",this.id]);
 }
  // functionality to add items to the cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
