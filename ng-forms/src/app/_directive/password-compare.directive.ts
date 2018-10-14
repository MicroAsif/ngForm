import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '../../../node_modules/@angular/forms';

@Directive({
  selector: '[appPasswordCompare]',
  providers: [{
    provide : NG_VALIDATORS,
    useExisting : 'appPasswordCompare',
    multi : true
  }]
})
export class PasswordCompareDirective implements Validator {

  @Input() appPasswordCompare: string;
  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent.get(this.appPasswordCompare);
    if (controlToCompare && controlToCompare.value !== control.value) {
        return { 'notEqual': true };
    }
    return null;
}

}
