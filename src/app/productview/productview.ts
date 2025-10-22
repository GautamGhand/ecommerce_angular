import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Productservice } from '../services/productservice';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Title } from '@angular/platform-browser';
import { Cartservice } from '../services/cartservice';
import { Store } from '@ngrx/store';
import { addToCart } from '../store/action';

@Component({
  selector: 'app-productview',
  imports: [RouterLink, LazyLoadImageModule],
  templateUrl: './productview.html',
  styleUrl: './productview.css',
})
export class Productview {
  product: any = {};
  productId: number;
  private store = inject(Store);

  constructor(
    private productService: Productservice,
    private route: ActivatedRoute,
    private titleService: Title,
    private cartService: Cartservice
  ) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.getSingleProduct();
  }

  getSingleProduct() {
    this.productService.getSingleProduct(this.productId).subscribe({
      next: (data) => {
        this.product = data;
        this.titleService.setTitle(`View Product | ${this.product.title}`);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  addToCart() {
    this.store.dispatch(
      addToCart({
        userId: 5,
        products: this.product,
      })
    );
    // this.cartService.addToCart().subscribe({
    //   next: (response) => {
    //     alert('Added To Cart Successfully!');
    //   },
    //   error: (err) => {
    //     console.error('Error:', err);
    //   },
    // });
  }
}
