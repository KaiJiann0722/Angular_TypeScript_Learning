import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.employeeComponent);
    this.employeeComponent.empName = 'Tan Kang Wei';
  }
}
