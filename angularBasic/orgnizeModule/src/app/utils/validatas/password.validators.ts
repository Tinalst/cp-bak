import {AbstractControl} from '@angular/forms';

export const passWordComfirm = (control: AbstractControl): {[key: string]: boolean} => {
  const email = control.get('password');
  const confirm = control.get('passwordConfirm');
  // if(!email || !confirm) return null;
  return email.value === confirm.value ?  null : {nomatch: true} ;
};
