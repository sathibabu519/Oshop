import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ExceptionService } from './exception.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from '../shared/authGuard/auth.guard';
import { AdminAuthGuard } from '../admin/adminGuard/admin-auth.guard';

//import { SpinnerComponent } from './spinner/spinner.component';
//import { NameListComponent } from './name-list/name-list.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'core/contact', component: ContactComponent, canActivate: [AuthGuard,AdminAuthGuard]}
    ])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
  ],
  exports:[
    BsNavbarComponent
  ],
  providers:[
    ExceptionService,
  ]
})
export class CoreModule { }
