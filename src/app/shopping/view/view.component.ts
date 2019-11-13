import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/services/shopping-cart-price.service';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Input('cart') cart: ShoppingCart;

  constructor() { }

  ngOnInit() {
  }

}
