import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName: string = "John Cena"

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
  }
}
