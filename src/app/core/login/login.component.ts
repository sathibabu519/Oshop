import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { SpinnerService } from '../../core/spinner/spinner.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService, private spinner : SpinnerService) { 
  }

  login() { 
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },5000);
    this.auth.login();
  }

}
