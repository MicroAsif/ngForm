import { Employee } from './../../_model/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../_services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empList: Employee[];
  constructor(private service: EmployeeService) {
    this.empList = service.getEmployees();
   }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];
  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
