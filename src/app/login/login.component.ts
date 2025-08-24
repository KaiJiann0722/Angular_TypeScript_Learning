import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email: string = '';

  password: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  login(): void {
     if(this.loginService.login(this.email, this.password)) {
        this.router.navigateByUrl('/rooms')
     }
  }
}
