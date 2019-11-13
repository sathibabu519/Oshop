import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from 'shared/services/auth.service';
import { SharedModule } from 'shared/shared.module';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminAuthGuard as AdminAuthGuard } from './admin/adminGuard/admin-auth.guard';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './core/login/login.component';
import { ProductsComponent } from './shopping/products/products.component';
//import { ShoppingModule } from './shopping/shopping.module';
import { SpinnerService } from './core/spinner/spinner.service';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { ToastService } from './core/toast/toast.service';
import { ToastComponent } from './core/toast/toast.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'shared/services/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { NameService } from 'app/core/name-list/name.service';
import { SentryService } from 'shared/services/sentry.service';

import { ChatModule } from './chatpage/chatPage.module';
// import { ButtonModule } from 'primeng/primeng';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ToastComponent,
   // ProductsComponent
  ],
  imports: [
    // ButtonModule,
    // BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    //ShoppingModule,
    AdminModule,
    BrowserModule,
    HttpClientModule,
    ChatModule,
    

    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([

      { path: 'login', component: LoginComponent },     
      { path: '',loadChildren:'./shopping/shopping.module#ShoppingModule' },

      { path: 'nav-bar',loadChildren:'./core/core.module#CoreModule'},
      { path: 'product-filter',loadChildren:'./shopping/shopping.module#ShoppingModule'},
      //{ path: 'product-card',loadChildren:'./shared/shared.module#ShaModule'},
      { path: 'shopping-cart',loadChildren:'./shopping/shopping.module#ShoppingModule'},
      { path: 'check-out',loadChildren:'./shopping/shopping.module#ShoppingModule'},
      { path: 'order-success',loadChildren:'./shopping/shopping.module#ShoppingModule'}
      

    ])    
  ],
  providers: [
    AdminAuthGuard,
    AuthService,
    SpinnerService,
    ToastService,
    NameService,
    
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor  ,
      multi:true
    },
    
    { provide: ErrorHandler, useClass: SentryService }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
