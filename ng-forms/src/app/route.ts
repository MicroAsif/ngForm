import { ProductsComponent } from './products/products.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { CascadingDropdownComponent } from './cascading-dropdown/cascading-dropdown.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { BookingComponent } from './booking/booking.component';


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
        path : 'booking',
        component : BookingComponent
    },
    {
        path: 'product-catalog',
        component : ProductsComponent
    },
    {
        path : 'admin/product/new',
        component : ProductFormComponent
    },
    {
        path : 'admin/product/:id',
        component : ProductFormComponent
    },
    {
        path : 'admin/products',
        component : AdminProductComponent
    },
    {
        path : '**',
        redirectTo : 'home', pathMatch: 'full'
    },
];
