// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
const auth = require("alfresco-js-utils/lib/Authentication");

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!auth.loggedIn();
  }

  login(email, password) {
      return auth.login(email, password);
  }
  
  logout() {
     auth.logout();
  }

  isLoggedIn() {
    return auth.loggedIn();
  }
}