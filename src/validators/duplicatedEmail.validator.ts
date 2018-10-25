import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Contact } from '../models/contact';
// @ts-ignore
const findIndex = require('lodash/findIndex');

export function isDuplicatedEmail(email: string, contacts: Contact[]): boolean {
  const result = findIndex(contacts, contact => {
    return contact.email == email;
  });
  return result > -1;
}

export function duplicatedEmailValidator(contacts: Contact[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (isDuplicatedEmail(control.value, contacts)) {
      return {'duplicatedEmail': true};
    }
    return null;
  };
}