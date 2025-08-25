import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests(): FormArray {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      roomId: [''],
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      address: this.formBuilder.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.formBuilder.array([
        this.formBuilder.group({
          guestName: [''],
        }),
      ]),
    });
    console.log(this.guests.controls);
  }

  addBooking() {
    console.log(this.bookingForm.value);
  }

  addGuest() {
    this.guests.controls.push(
      this.formBuilder.group({
        guestName: [''],
      })
    );
  }
  
}
