import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Cartservice } from '../services/cartservice';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Product } from './model';
import { addToCart, addToCartSuccess, addToCartFailure } from './action';

@Injectable()
export class AddToCartEffect {
  actions$ = inject(Actions);

  constructor(private cartService: Cartservice) {}

  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToCart),
      mergeMap((action) =>
        this.cartService.addToCart(action.userId, [action.products]).pipe(
          map((response: any) => addToCartSuccess({ product: response.products[0] })), // single product
          catchError(() => of(addToCartFailure()))
        )
      )
    )
  );
}
