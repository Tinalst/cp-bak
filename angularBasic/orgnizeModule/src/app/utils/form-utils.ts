import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

export class FormTools {
  /**
   * 用于表单动态验证
   * @param {FormGroup} formGroup
   */
  static validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      }else if (control instanceof  FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  /**
   * can use this when formgroup not nested formgroup
   * @param {FormGroup} form
   * @param {string} field
   * @returns {boolean}
   */
  static isFieldValid(form: FormGroup, field: string): boolean {
    return !form.get(field).valid && form.get(field).touched;
  }

  /**
   * can use this when formgroup nested formgroup
   * @param {AbstractControl} form
   * @param {string} field
   * @returns {boolean}
   */
  static isFieldGroupValid(form: AbstractControl, field: string): boolean {
    return !form.get(field).valid && form.get(field).touched;
  }


}
