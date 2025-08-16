import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

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

  emptyRoom: Room = {};

  roomList: RoomList[] = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air conditionar, Free Wifi',
      price: 500,
      checkInTime: new Date('11-Aug-2025'),
      checkOutTime: new Date('12-Aug-2025')  
    },
    {
      roomNumber: 2,
      roomType: 'Private Suite',
      amenities: 'Air conditionar, Free Wifi',
      price: 1000,
      checkInTime: new Date('11-Aug-2025'),
      checkOutTime: new Date('12-Aug-2025')  
    },
  ]

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle(): void {
    this.hideRoooms = !this.hideRoooms;
  }

}
