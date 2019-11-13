import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { SpinnerService } from '../../core/spinner/spinner.service';
import { Router } from '@angular/router';
import { ToastService } from 'app/core/toast/toast.service';
import { Constants } from '../../core/toast/constant';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$;

  constructor(private shoppingCartService : ShoppingCartService,
    private spinner:SpinnerService,
    private router:Router,
    private toast:ToastService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  
  }

  clearCart(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },1000)
    this.toast.activate(Constants.clearCart)
    this.shoppingCartService.clearCart();

  }
  checkOut(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.router.navigate(['/check-out'])
  }

  totalprice(item){ return item.price * item.quantity;}

  names(){
    this.router.navigate(['/name-list']);
  }

}
