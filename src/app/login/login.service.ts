import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false

  constructor() { }

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'Admin') {
      // this.router.navigateByUrl('/rooms/add')
      this.isLoggedIn = true;
    }

    return this.isLoggedIn;
  }
}
