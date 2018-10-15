import { Employee } from './../_model/employee';
import { EmployeeService } from './../_services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 empList: any;
  constructor(private employeeService: EmployeeService ) {
    this.empList = this.employeeService.getEmployees();
    console.log(this.empList);
  }

  ngOnInit() {
  }

}
