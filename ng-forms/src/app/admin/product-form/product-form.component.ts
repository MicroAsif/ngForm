import { ProductService } from './../../_services/Product.service';
import { CategoryService } from './../../_services/Category.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categoryList: any;
  product = {};
  id;
  constructor(
     private categoryService: CategoryService,
     private productService: ProductService,
     private routeActive: ActivatedRoute,
     private route: Router) {
     this.id = this.routeActive.snapshot.params['id'];
     if (this.id) {
       this.productService.getProduct(this.id).subscribe(data => {
        this.product = data;
        console.log(this.product);
      });
     }
    }

  ngOnInit() {
    this.categoryService.getCategoiesDb().subscribe(data => {
      this.categoryList = data;
      console.log(this.categoryList);
    });
  }

  saveCategory() {
    const category = {
      Name :  'new category'
    };
    this.categoryService.addCategory(category);
  }

  save(product) {
    console.log(product);
    if (this.id) {
      this.productService.updateProduct(this.id, product);
    } else {
      this.productService.addProduct(product);
    }
    this.route.navigate(['/admin/products']);

  }

}
