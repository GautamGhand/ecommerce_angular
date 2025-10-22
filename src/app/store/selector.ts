import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./reducer";

export const selectCartState = createFeatureSelector<ProductState>('addToCart');

export const selectProducts = createSelector(
  selectCartState,
  state => state.products
);

export const selectCount = createSelector(
  selectCartState,
  state => state.count
);

export const selectLoading = createSelector(
  selectCartState,
  state => state.loading
);
