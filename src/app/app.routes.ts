import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Productview } from './productview/productview';
import { User } from './user/user';

export const routes: Routes = [
    {
        path:'',
        component:Home,
        title:'Home'
    },
    {
        path:'product/show/:id',
        component:Productview,
    },
    {
        path:'users',
        component:User,
        title:'Users'
    }
];
