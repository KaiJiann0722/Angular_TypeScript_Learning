import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  isAdmin: boolean = false;

  constructor() { }

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'Admin') {
      // this.router.navigateByUrl('/rooms/add')
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (email === 'user@gmail.com' && password === 'User') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }

    return this.isLoggedIn;
  }
}
