import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AuthGuard } from 'shared/authGuard/auth.guard';
import { SharedModule } from 'shared/shared.module';

import { CheckOutComponent } from './check-out/check-out.component';
import { NameListComponent } from 'app/core/name-list/name-list.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductsComponent } from './products/products.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewComponent } from './view/view.component';
import { AdminAuthGuard } from 'app/admin/adminGuard/admin-auth.guard';


const appRoutes:Routes=[
              
      { path: '', component: ProductsComponent },
      //{ path: '**', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent ,canActivate: [AuthGuard]},
      {path:'name-list',component : NameListComponent},
      { path: 'order-success/:id', component: OrderSuccessComponent ,canActivate: [AuthGuard] },
      { path: 'my-orders', component: MyOrdersComponent , canActivate: [AuthGuard] },
      { path: 'shopping-cart-summary', component: ShoppingCartSummaryComponent , canActivate: [AuthGuard]},
      { path: 'view',component: ViewComponent , canActivate: [AuthGuard , AdminAuthGuard]},
      { path: 'view-orders',component: ViewOrdersComponent , canActivate: [AuthGuard , AdminAuthGuard]},
      { path: '**', component: ProductsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
      

  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    NameListComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ViewComponent,
    ViewOrdersComponent,
  
    
  ],
  exports: [RouterModule]
})
export class ShoppingModule { }
