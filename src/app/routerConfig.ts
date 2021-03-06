import { Routes, ChildActivationEnd } from '@angular/router';
import { CartComponent} from './cart/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { DetailedProductComponent } from './product/detailed-product/detailed-product.component';

export const appRoutes: Routes = [
    {
        path: 'Dashboard',
        component: HomeComponent,
        children:[
            {
                path: 'productList',
                component: ProductListComponent,
                outlet: 'child1'
            },
            {
                path: 'detailedList',
                component: DetailedProductComponent,
                outlet: 'child2'
            }
        ]
    }
];