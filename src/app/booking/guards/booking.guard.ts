import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (component, currentRoute, currentState, nextState) => {

  const snackBar = inject(MatSnackBar);

  if(component.bookingForm.dirty){
    return true;
  } else {
    snackBar.open('You have unsaved changes!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
    return false;
  }
};
