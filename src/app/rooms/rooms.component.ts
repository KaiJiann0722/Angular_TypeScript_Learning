import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 50;

  hideRoooms = false;

  title = 'Rooom List'

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  emptyRoom: Room = {};

  roomList: RoomList[] = [];

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air conditionar, Free Wifi',
        price: 500,
        checkInTime: new Date('11-Aug-2025'),
        checkOutTime: new Date('12-Aug-2025'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Private Suite',
        amenities: 'Air conditionar, Free Wifi',
        price: 1000,
        checkInTime: new Date('11-Aug-2025'),
        checkOutTime: new Date('12-Aug-2025'),
        rating: 2.6,
      },
    ];
  }

  toggle(): void {
    this.hideRoooms = !this.hideRoooms;
    this.title = "Tan Kang Wei"
  }

  submitRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 3,
      roomType: 'Super Deluxe Room',
      amenities: 'Good',
      price: 1500,
      checkInTime: new Date('18-Aug-2025'),
      checkOutTime: new Date('18-Aug-2025'),
      rating: 4.5,
    };
    // this.roomList.push(room);

    this.roomList = [...this.roomList, room]
  }
}
