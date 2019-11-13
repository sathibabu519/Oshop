import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCart } from 'shared/services/shopping-cart-price.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  @Input('cart') cart: ShoppingCart;
  orders$;

  constructor(private orderService: OrderService,
    private router: Router) { 
      
    this.orders$ = orderService.getOrders();
  }
  delete(){
    this.orderService.getOrders().remove();
  }
}
