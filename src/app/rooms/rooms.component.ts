import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
   
  hotelName = "Hilton Hotel"

  numberOfRooms = 50;

  hideRoooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  emptyRoom: Room = {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle(): void {
    this.hideRoooms = !this.hideRoooms;
  }

}
