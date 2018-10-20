import { ProductService } from './../../_services/Product.service';
import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  productList: any;
  constructor(private product: ProductService) {
  this.LoadAllProducts();
  }
  LoadAllProducts(){
    this.product.getProducts().subscribe(data => {
      this.productList = data;
      console.log(this.productList);
    });
  }

  ngOnInit() {
  }

  Delete(Id) {
    console.log(Id);
    if (!confirm('Are you sure want to delete ?')) { return; }
    this.product.DeleteProduct(Id);
    this.LoadAllProducts();
  }
}
