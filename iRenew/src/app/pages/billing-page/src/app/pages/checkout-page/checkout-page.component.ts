import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
calculateSubtotal(): string|number {
throw new Error('Method not implemented.');
}
  products: any[] = [];
  total: number = 0;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('products.json').subscribe(data => {
      this.products = data;
      this.calculateTotal();
    });
  }

  // Function to calculate total price
  calculateTotal(): void {
    this.total = this.products.reduce((acc, curr) => acc + curr.price, 0);
  }

  // Function to place order
  placeOrder(): void {
    // Implement your logic for placing the order here
    // For now, just navigate to the success page
    this.router.navigate(['/confirmation']);
  }
}
