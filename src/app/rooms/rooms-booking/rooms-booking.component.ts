import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css',
})
export class RoomsBookingComponent implements OnInit {
  id: string = '';

  id$ = this.router.paramMap.pipe(map((param) => param.get('id')));

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // 1. Use Snapshot
    // this.id = this.router.snapshot.params['id'];

    // 2. Use async pipe
    // this.id$ = this.router.params.pipe(map((param) => param['id']));

    // 3. Use subscribe
    // this.router.params.subscribe((params) => {
    //   this.id = params['id'];
    // });
  }
}
