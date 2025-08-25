import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.getBookingData();

    this.bookingForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  getBookingData() {
    this.bookingForm.patchValue({
      roomId: '',
      guestEmail: 'test@gmail.com',
      checkinDate: new Date(),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      address: this.formBuilder.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      }),
      guests: [],
      tnc: false,
    });
  }

  initForm() {
    this.bookingForm = this.formBuilder.group({
      roomId: ['', [Validators.required]],
      guestEmail: [
        '',
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur'
        },
      ],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', {
        updateOn: 'blur'
      }],
      address: this.formBuilder.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.formBuilder.array([this.addGuestControl()]),
      tnc: new FormControl(false, [Validators.requiredTrue]),
    }, {updateOn: 'blur'});
  }

  addBooking() {
    console.log(this.bookingForm.value);
    this.bookingForm.reset();
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  addGuestControl() {
    return this.formBuilder.group({
      guestName: ['', [Validators.required]],
    });
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  removePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(index: number) {
    this.guests.removeAt(index);
  }
}
