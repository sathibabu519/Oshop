import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/services/shopping-cart-price.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  cart$: Observable<ShoppingCart>;
  
 
  
  constructor(
    private shoppingCartService: ShoppingCartService){}

  async ngOnInit(){
    this.cart$= await this.shoppingCartService.getCart();
    
    
  }

}
