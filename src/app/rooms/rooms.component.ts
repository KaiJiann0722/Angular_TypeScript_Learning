import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
   
  hotelName = "Hilton Hotel"

  numberOfRooms = 50;

  hideRoooms = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle(): void {
    this.hideRoooms = !this.hideRoooms;
  }

}
