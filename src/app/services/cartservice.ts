import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../store/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cartservice {
  private base_url = 'https://dummyjson.com/carts';

  constructor(private http: HttpClient) {}

  addToCart(userId: number, products: Product[]): Observable<any> {
    const payload = {
      userId,
      products: products.map((p) => ({ id: p.id, quantity: p.quantity || 1 })),
    };
    return this.http.post(`${this.base_url}/add`, payload);
  }

  getUserCart(userId: number) {
    return this.http.get(`${this.base_url}/user/${userId}`);
  }
}
