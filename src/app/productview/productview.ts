import { ChangeDetectorRef, Component } from '@angular/core';
import { Productservice } from '../services/productservice';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-productview',
  imports: [RouterLink,LazyLoadImageModule],
  templateUrl: './productview.html',
  styleUrl: './productview.css'
})
export class Productview {

  product:any={};
  productId:number;

  constructor(private productService:Productservice,private route:ActivatedRoute){
    this.productId=Number(this.route.snapshot.paramMap.get('id'));
    this.getSingleProduct();
  }

  getSingleProduct(){
    this.productService.getSingleProduct(this.productId).subscribe({
       next: (data) => {
        this.product = data;
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
