import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Productview } from './productview/productview';
import { User } from './user/user';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'product/show/:id',
        component:Productview,
        data:{renderMode:'client'}
    },
    {
        path:'users',
        component:User
    }
];
