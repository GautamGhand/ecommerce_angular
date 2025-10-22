import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCount } from '../store/selector';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;
  private store = inject(Store);
  cartCount$: Observable<number> = this.store.select(selectCount);

  ngOnInit() {
    this.cartCount$.subscribe((count) => console.log('Cart count:', count));
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
