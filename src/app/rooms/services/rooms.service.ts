import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { AppConfig } from '../../AppConfig/appConfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  rooms: RoomList[] = [

  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private httpClient: HttpClient) {
    console.log(this.config.apiEndpoint);
    console.log("Rooms Service is initialized.....");
  }

  getRooms() {
    return this.httpClient.get<RoomList[]>('api/rooms');
  }

  addRooms(room: RoomList) {
    return this.httpClient.post<RoomList[]>('api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.httpClient.put<RoomList[]>(`api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(roomNumber: string) {
    return this.httpClient.delete<RoomList[]>(`api/rooms/${roomNumber}`);
  }
}
