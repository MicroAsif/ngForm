import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { CascadingDropdownComponent } from './cascading-dropdown/cascading-dropdown.component';


export const AppRoute: Routes = [
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'cascading',
        component: CascadingDropdownComponent
    },
    {
        path: 'template',
        component : TemplateDrivenComponent
    },
    {
        path: 'reactive',
        component: ReactiveFormComponent
    },
    {
        path : '**',
        redirectTo : 'home', pathMatch: 'full'
    },
];
