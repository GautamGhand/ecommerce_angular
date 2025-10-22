import { createAction, props } from '@ngrx/store';
import { Product } from './model';

export const addToCart = createAction(
  '[Add To Cart] Add To Cart',
  props<{ userId: number; products: Product }>() // single product
);

export const addToCartSuccess = createAction(
  '[Add To Cart] Add To Cart Success',
  props<{ product: Product }>() // single product
);

export const addToCartFailure = createAction('[Add To Cart] Add To Cart Failure');
