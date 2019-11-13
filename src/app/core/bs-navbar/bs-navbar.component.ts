import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppUser } from 'shared/models/app-user.model';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCart } from 'shared/services/shopping-cart-price.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

import { Constants } from '../../core/toast/constant';

import { SpinnerService } from '../spinner/spinner.service';
import { ToastService } from '../toast/toast.service';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  appUser: AppUser;
  cart$:Observable<ShoppingCart>;
  darkModeActive: boolean;
  isDarkTheme: boolean = false;
 
  constructor(private auth: AuthService,private shoppingCartService:ShoppingCartService,
    private spinner:SpinnerService,
    private router:Router,
    private toast: ToastService,
    ) {
    
  }
    async ngOnInit(){
      
      this.auth.appUser$.subscribe(appUser=>this.appUser = appUser);

      this.cart$= await this.shoppingCartService.getCart();
    
    }
      
    home(){
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide()
      }, 1000);
      this.router.navigate(['/'])
    }

    myOrders(){
      // routerLink="/my-orders"
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.router.navigate(['/my-orders'])
    }

    logout(){
      this.shoppingCartService.clearCart();
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.toast.activate(Constants.logout)
      this.auth.logout();

    }
   
    shoppingcart(){ 
      this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
      },1000)
      this.router.navigate(['/shopping-cart'])

      console.log('navigate to shoping cart')
    }
    
    manageProducts(){
      this.spinner.show();
      //  /admin/products
      setTimeout(()=>{
      this.spinner.hide();
      },1000)
      this.router.navigate(['/admin/products'])
    }
  
}
