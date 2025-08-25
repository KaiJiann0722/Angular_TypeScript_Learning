import { AbstractControl, FormGroup } from '@angular/forms';

export class Custom_Validator {
  static validateName(control: AbstractControl) {
    const value = control.value as string;

    if (value.includes('test')) {
      return { invalidName: true };
    }

    return null;
  }

  static validateDate(control: FormGroup) {
    const checkinDate = new Date(control.get('checkinDate')?.value);
    const checkoutDate = new Date(control.get('checkoutDate')?.value);

    if (checkinDate < checkoutDate) {
      return { dateRangeInvalid: true };
    }

    return null;
  }
}
