import { createReducer, on } from "@ngrx/store";
import { Product } from "./model";
import { addToCart, addToCartSuccess } from "./action";

export interface ProductState {
  products: Product[];
  loading: boolean;
  count: number;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  count: 0
};

export const addToCartReducer = createReducer(
  initialState,
  on(addToCart, state => ({
    ...state,
    loading: true
  })),
  on(addToCartSuccess, (state, { product }) => {
    const existingIndex = state.products.findIndex(p => p.id === product.id);
    let updatedProducts;
    let updatedCount = state.count;

    if (existingIndex > -1) {
      updatedProducts = state.products.map((p, i) =>
        i === existingIndex ? { ...p, quantity: (p.quantity || 1) + 1 } : p
      );
      updatedCount += 1;
    } else {
      updatedProducts = [...state.products, { ...product, quantity: 1 }];
      updatedCount += 1;
    }

    return {
      ...state,
      products: updatedProducts,
      count: updatedCount,
      loading: false
    };
  })
);
