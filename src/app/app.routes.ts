import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((c) => c.Home),
    title: 'Home',
  },
  {
    path: 'product/show/:id',
    loadComponent: () => import('./productview/productview').then((c) => c.Productview),
  },
  {
    path: 'users',
    loadComponent: () => import('./user/user').then((c) => c.User),
    title: 'Users',
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart').then((c) => c.Cart),
    title: 'Cart',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((c) => c.Login),
    title: 'Login',
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register').then((c) => c.Register),
    title: 'Register',
  },
];
