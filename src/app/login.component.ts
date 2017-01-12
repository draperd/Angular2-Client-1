// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'login',
  template: `<form (ngSubmit)="onSubmit()">
      <label><input name="username" [(ngModel)]="username" placeholder="username" /></label>
      <label><input name="password" [(ngModel)]="password" placeholder="password" /></label><br/>
      <button type="submit">login</button>
   </form>`
})
export class LoginComponent {

   username: any
   password: any

   constructor(private userService: UserService, private router: Router) {
      this.username = "";
      this.password = "";
   }

   onSubmit(email, password) {
      this.userService.login(this.username, this.password).then((loggedIn) => {
         if (!loggedIn)
         {
            
         }
         else
         {
            this.router.navigate(['']);
         }
      });
   }
}