import { ChangeDetectorRef, Component } from '@angular/core';
import { Productservice } from '../services/productservice';
import { RouterLink } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-home',
  imports: [RouterLink,LazyLoadImageModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  products: any[] = [];

  constructor(private productService: Productservice) {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data.products;  
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}
