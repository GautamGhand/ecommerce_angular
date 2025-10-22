import { Component } from '@angular/core';
import { Cartservice } from '../services/cartservice';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartItems: any[] = [];

  constructor(private cartService: Cartservice) {
    this.getCart();
  }

  getCart() {
    this.cartService.getUserCart(5).subscribe({
      next: (response: any) => {
        this.cartItems = response.carts;
      },
      error: (error) => {
        console.error('Error fetching cart:', error);
      },
    });
  }
}
