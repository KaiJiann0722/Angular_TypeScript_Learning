import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css',
})
export class RoomsAddComponent implements OnInit {
  rooms: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    checkInTime: new Date(),
    checkOutTime: new Date(),
    rating: 0,
  };

  successMessage: string = '';

  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {}

  addRoom(roomsForm: NgForm) {
    this.roomService.addRooms(this.rooms).subscribe((data) => {
      this.successMessage = 'Rooms add Successfully';
      roomsForm.reset();
    });
  }
}
