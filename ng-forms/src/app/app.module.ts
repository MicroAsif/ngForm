import { CategoryService } from './_services/Category.service';
import { environment } from './../environments/environment';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './_services/employee.service';
import { MaterialModule } from './material/material.module';
import { CountryService } from './_services/country.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CascadingDropdownComponent } from './cascading-dropdown/cascading-dropdown.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { AppRoute } from './route';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {ModalModule} from 'ngx-modal';
import { BookingComponent } from './booking/booking.component';
import {BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
   declarations: [
      AppComponent,
      TemplateDrivenComponent,
      ReactiveFormComponent,
      CascadingDropdownComponent,
      EmployeesComponent,
      EmployeeComponent,
      HomeComponent,
      AdminProductComponent,
      ProductFormComponent,
      BookingComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(AppRoute),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      HttpClientModule,
      NgxPaginationModule,
      ModalModule,
      BsDatepickerModule.forRoot()
   ],
   providers: [
      CountryService,
      EmployeeService,
      CategoryService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
