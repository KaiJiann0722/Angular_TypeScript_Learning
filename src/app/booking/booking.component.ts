import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookingService } from './booking.service';
import { mergeMap } from 'rxjs';
import { Custom_Validator } from './CustomValidator/custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  roomId: string = '';

  get guests(): FormArray {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.roomId = this.router.snapshot.params['id']
    this.initForm();
    this.getBookingData();

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe(data => console.log(data))
    // });

      this.bookingForm.valueChanges.pipe(
        mergeMap((data) => this.bookingService.bookRoom(data))
      ).subscribe(data => console.log(data));
  }

  getBookingData() {
    this.bookingForm.patchValue({
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
      roomId: [this.roomId, [Validators.required]],
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
    }, {updateOn: 'blur', validators: [Custom_Validator.validateDate]});
  }

  addBooking() {
    console.log(this.bookingForm.value);

    // this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe(data => {
    //     console.log(data);
    // })
    // this.bookingForm.reset();
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  addGuestControl() {
    return this.formBuilder.group({
      guestName: ['', [Validators.required, Custom_Validator.validateName]],
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
