import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/authGuard/auth.guard';
import { SharedModule } from 'shared/shared.module';

import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AdminAuthGuard } from './adminGuard/admin-auth.guard';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([

      { path: 'admin/product-form', component: ProductFormComponent , canActivate: [AuthGuard,AdminAuthGuard]},
      { path: 'admin/products/:id', component: ProductFormComponent , canActivate: [AuthGuard,AdminAuthGuard]},
      { path: 'admin/products', component: AdminProductsComponent , canActivate: [AuthGuard,AdminAuthGuard]},
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard,AdminAuthGuard]}
    ])  
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ]
})
export class AdminModule { }
