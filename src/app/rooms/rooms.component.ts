import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { HttpEventType } from '@angular/common/http';
import { catchError, map, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit, AfterViewInit, OnDestroy {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 50;

  hideRoooms = false;

  title = 'Rooom List';

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  emptyRoom: Room = {};

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildren!: QueryList<HeaderComponent>;

  totalBytes = 0;

  // roomsService = new RoomsService();

  err$: Subject<string> = new Subject<string>();

  getError$ = this.err$.asObservable();

  subscription!: Subscription

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      // console.log(err);
      this.err$.next(err.message);
      return of([]);
    })
  );

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map(roomCount => roomCount.length)
  )

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event) => {
      switch(event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log("Request Comple");
          break;
        }
      }
    })

    // this.roomsService.getRooms$.subscribe((rooms) => (this.roomList = rooms));
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';

    this.headerChildren.last.title = 'Last Title';
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggle(): void {
    this.hideRoooms = !this.hideRoooms;
    this.title = 'Tan Kang Wei';
  }

  submitRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      // roomNumber: '3',
      roomType: 'Super Deluxe Room',
      amenities: 'Good',
      price: 1500,
      checkInTime: new Date('18-Aug-2025'),
      checkOutTime: new Date('18-Aug-2025'),
      rating: 4.5,
    };
    // this.roomList.push(room);

    // this.roomList = [...this.roomList, room];

    // Change to http client post method
    this.roomsService.addRooms(room).subscribe(data => this.roomList = data);
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Super Deluxe Room',
      amenities: 'Good',
      price: 1500,
      checkInTime: new Date('18-Aug-2025'),
      checkOutTime: new Date('18-Aug-2025'),
      rating: 4.5,
    };

     this.roomsService.editRoom(room).subscribe(data => this.roomList = data);
  }

  deleteRoom(roomNumber: string) {
    this.roomsService.deleteRoom(roomNumber).subscribe(data => this.roomList = data);
  }

}

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
