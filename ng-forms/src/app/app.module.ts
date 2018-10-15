import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './_services/employee.service';
import { MaterialModule } from './material/material.module';
import { CountryService } from './_services/country.service';
import { PasswordCompareDirective } from './_directive/password-compare.directive';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CascadingDropdownComponent } from './cascading-dropdown/cascading-dropdown.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
   declarations: [
      AppComponent,
      TemplateDrivenComponent,
      ReactiveFormComponent,
      CascadingDropdownComponent,
      EmployeesComponent,
      EmployeeComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      BrowserAnimationsModule
   ],
   providers: [CountryService, EmployeeService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
