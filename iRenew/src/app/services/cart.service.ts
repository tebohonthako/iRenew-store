import { Injectable } from '@angular/core';
import { Product } from '../interface/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];

  constructor() {}

  // adding a product to cart
  addToCart(product: Product) {
    this.cartItems.push(product);
  }
  // removing an item from cart
  removeFromCart(product: Product) {
    const index = this.cartItems.indexOf(product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
  // returning items in the cart
  getCartItems(): Product[] {
    return this.cartItems;
  }
  // clearing the cart
  clearCart() {
    this.cartItems = [];
  }
}
