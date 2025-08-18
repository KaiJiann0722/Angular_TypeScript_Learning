import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { AppConfig } from '../../AppConfig/appConfig.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  rooms: RoomList[] = [
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
    console.log("Rooms Service is initialized.....");
  }

  getRooms(): RoomList[] {
    return this.rooms;
  }
}
