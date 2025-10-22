export interface Product {
  id: number;
  title: string;
  price: number;
  quantity?: number; // optional, defaults to 1 when adding to cart
}
