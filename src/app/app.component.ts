import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import {UserService } from 'shared/services/user.service';
import { Name } from 'shared/models/name';
import { NameService } from './core/name-list/name.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
  //name:Name[];



  constructor(private userService: UserService, private auth:AuthService, router:Router, private nameService:NameService){
    auth.user$.subscribe(user =>{
      if (!user) return;
        userService.save(user);

        let returnUrl= localStorage.getItem('returnUrl');
        if(!returnUrl) return;
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
        
      }); 

      

  }

  // ngOnInit(){
  //   this.nameService.getNames().subscribe(res => {
  //     this.name = res;
  //     console.log(this.name);
  //   })
  // }
}
