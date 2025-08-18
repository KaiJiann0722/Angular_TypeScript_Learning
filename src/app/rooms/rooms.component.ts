import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit, AfterViewInit {
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
  
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent
  
  @ViewChildren(HeaderComponent) headerChildren!: QueryList<HeaderComponent>

  // roomsService = new RoomsService();

  constructor(private roomsService: RoomsService) {

  }

  ngOnInit(): void {
    // this.roomList = [
    //   {
    //     roomNumber: 1,
    //     roomType: 'Deluxe Room',
    //     amenities: 'Air conditionar, Free Wifi',
    //     price: 500,
    //     checkInTime: new Date('11-Aug-2025'),
    //     checkOutTime: new Date('12-Aug-2025'),
    //     rating: 4.5,
    //   },
    //   {
    //     roomNumber: 2,
    //     roomType: 'Private Suite',
    //     amenities: 'Air conditionar, Free Wifi',
    //     price: 1000,
    //     checkInTime: new Date('11-Aug-2025'),
    //     checkOutTime: new Date('12-Aug-2025'),
    //     rating: 2.6,
    //   },
    // ];
    this.roomList = this.roomsService.getRooms();
  }
  
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View"

    this.headerChildren.last.title = "Last Title"
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
