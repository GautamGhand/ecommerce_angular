import { Component, inject } from '@angular/core';
import { Cartservice } from '../services/cartservice';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectProducts } from '../store/selector';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [DecimalPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartItems: any[] = [];
  private store = inject(Store);
  cartProducts$: Observable<any> = this.store.select(selectProducts);

  constructor(private cartService: Cartservice) {
    this.getCart();
    this.getCartTotal();
  }

  getCart() {
    this.cartProducts$.subscribe({
      next: (products) => {
        this.cartItems = products;
      },
      error: (err) => console.error('Error:', err),
    });
    // this.cartService.getUserCart(5).subscribe({
    //   next: (response: any) => {
    //     this.cartItems = response.carts;
    //   },
    //   error: (error) => {
    //     console.error('Error fetching cart:', error);
    //   },
    // });
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
