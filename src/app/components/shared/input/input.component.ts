import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() placeHolder: string = 'Write something...';
  @Input() inputValue: any = null;
  @Input() inputType: string = 'text';
  @Input() title: string = 'field';
  @Input() controlName: string = '';
  @Input() parentForm: FormGroup;
  @Input() id: string = '';

  error: any = 'lonOutOfTheLimit';
  hasError: boolean = false;

  errorList: any = {
    latOutOfTheLimit: 'Provide a value within the range of [-90, 90]',
    lonOutOfTheLimit: 'Provide a value within the range of [-180, 180]',
    invalidValue: 'Provide a valid value',
    invalidCityCharacters: 'The city name must contain letters as characters',
    missingLatOrLon:
      'The latitude and longitude fields must be filled in together',
    invalidCity: 'This city name is invalid',
  };
  get f() {
    return this.parentForm.controls;
  }

  onInputChange(event: any) {
    this.f[this.controlName].setValue(event);
    this.validateSteps(event);
  }

  validateSteps(event: any) {
    this.f[this.controlName].setErrors(null);
    if (this.controlName === 'lat' || this.controlName === 'lon') {
      this.validateNumberRange(event);
      this.validateValueAtBothFields();
    }

    if (this.controlName === 'city') {
      this.validateCityCharacters(event);
    }
  }

  validateValueAtBothFields() {
    if (!this.f['lon'].value && !this.f['lat'].value) {
      this.f['lon'].setErrors(null);
      this.f['lat'].setErrors(null);
      return;
    }
    if (this.isMissingError()) {
      return;
    }

    if (this.controlName === 'lat' && !this.f['lon'].value) {
      this.f['lon'].setErrors({ missingLatOrLon: true });
    } else if (this.controlName === 'lon' && !this.f['lat'].value) {
      this.f['lat'].setErrors({ missingLatOrLon: true });
    }
  }

  isMissingError(): boolean {
    let latError: any = this.f['lat'].errors;
    if (latError) {
      latError = Object.keys(latError).toString();
    }

    let lonError: any = this.f['lon'].errors;
    if (lonError) {
      lonError = Object.keys(lonError).toString();
    }

    return (
      (latError && latError === 'missingLatOrLon') ||
      (lonError && lonError === 'missingLatOrLon')
    );
  }

  handleInvalidValueError() {
    this.hasError = true;
    this.error = 'invalidValue';
  }

  validateNumberRange(value: string) {
    if (!value) {
      return;
    }

    let regex: RegExp;

    if (this.controlName === 'lat') {
      regex = /^-?[0-9]{1,2}(?:\.[0-9]{1,10})?$/;
      this.error = { latOutOfTheLimit: true };
    } else {
      regex = /^-?(?:\d|[1-9]\d|1[0-7]\d|\b180\b)(?:\.\d+)?$/;
      this.error = { lonOutOfTheLimit: true };
    }

    if (!regex.test(value)) {
      this.f[this.controlName].setErrors(this.error);
    }
  }

  validateCityCharacters(value: string) {
    if (!value) {
      return;
    }

    const regex: RegExp = /^[^0-9]*$/;
    if (!regex.test(value)) {
      this.f['city'].setErrors({ invalidCityCharacters: true });
    }
  }

  getErrorMessage(): string {
    const error: any = this.f[this.controlName].errors;
    const errorName: string = Object.keys(error)[0];
    return this.errorList[errorName];
  }
}
