import { ChangeDetectorRef, Component } from '@angular/core';
import { Productservice } from '../services/productservice';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-productview',
  imports: [RouterLink,LazyLoadImageModule],
  templateUrl: './productview.html',
  styleUrl: './productview.css'
})
export class Productview {

  product:any={};
  productId:number;

  constructor(private productService:Productservice,private route:ActivatedRoute,private titleService:Title){
    this.productId=Number(this.route.snapshot.paramMap.get('id'));
    this.getSingleProduct();
  }

  getSingleProduct(){
    this.productService.getSingleProduct(this.productId).subscribe({
       next: (data) => {
        this.product = data;
        this.titleService.setTitle(`View Product | ${this.product.title}`)
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  addToCart(id:number){
    alert(id);
  }
}
