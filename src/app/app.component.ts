import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from me</h1>
  // <p>Angular is awesome!!!</p>`,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'Admin';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.events.subscribe((event) => console.log(event));
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log("Navigation Started");
      });

      this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log("Navigation Completed");
      });
  }
}
