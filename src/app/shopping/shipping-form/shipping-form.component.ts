import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Order } from 'shared/services/orderPlace.service';
import { ShoppingCart } from 'shared/services/shopping-cart-price.service';
import { SpinnerService } from '../../core/spinner/spinner.service';


@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId : string;

  constructor(
    private router:Router,
    private authService: AuthService,
    private orderService : OrderService,
    private spinner : SpinnerService){

    }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid)
  }

  ngOnDestroy(){
    
    this.userSubscription.unsubscribe();

  }

  async placeOrder() {
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
      },1000);
      
    let order= new Order(this.userId,this.shipping,this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
}   

}
