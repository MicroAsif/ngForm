import { Employee } from './../../_model/employee';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../_services/employee.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  empList: Employee[];
  constructor(private service: EmployeeService) {
    this.empList = service.getEmployees();
    this.listData = new MatTableDataSource<any>(this.empList);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
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

  addEmployee() {
    console.log(this.service.form.value);
    this.empList.push(this.service.form.value);
    this.service.form.reset();
  }
}
