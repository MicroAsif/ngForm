import { Employee } from './../_model/employee';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Injectable()
export class EmployeeService {
    constructor() { }

form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
        this.form.setValue({
        $key: null,
        fullName: '',
        email: '',
        mobile: '',
        city: '',
        gender: '1',
        department: 0,
        hireDate: '',
        isPermanent: false
        });
    }

    getEmployees() {
       return [
           new Employee('1', 'asif', 12536, 'asif0531@live.com', 'dhaka', 1, '07/08/1994', '1', false),
           new Employee('2', 'hello', 12536, 'asif0531@live.com', 'dhaka', 1, '07/08/1994', '1', false),
        ];
    }
    // addEmployee(emp: Employee) {
    //     this.empList.push(emp);
    // }
}
