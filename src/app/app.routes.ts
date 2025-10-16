import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Productview } from './productview/productview';
import { User } from './user/user';

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
];
