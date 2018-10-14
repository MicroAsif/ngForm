import { PasswordCompareDirective } from './_directive/password-compare.directive';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
   declarations: [
      AppComponent,
      TemplateDrivenComponent,
      ReactiveFormComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
