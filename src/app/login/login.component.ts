import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email: string = '';

  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin') {
      // this.router.navigateByUrl('/rooms/add')
      this.router.navigate(['/rooms', 'add']);
    }
  }
}
