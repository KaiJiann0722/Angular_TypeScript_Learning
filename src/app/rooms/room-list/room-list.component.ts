import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit {

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {}

  submitRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
