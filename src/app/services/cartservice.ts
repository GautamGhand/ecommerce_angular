import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cartservice {
  private base_url = 'https://dummyjson.com/carts';

  constructor(private http: HttpClient) {}

  addToCart() {
    const body = {
      userId: 5,
      products: [
        { id: 144, quantity: 4 },
        { id: 98, quantity: 1 },
      ],
    };

    return this.http.post(`${this.base_url}/add`, body);
  }

  getUserCart(userId: number) {
    return this.http.get(`${this.base_url}/user/${userId}`);
  }
}
