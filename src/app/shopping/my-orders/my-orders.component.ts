import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import { ShoppingCart } from 'shared/services/shopping-cart-price.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  @Input('cart') cart: ShoppingCart;
  orders$;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router) {

    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }
}
