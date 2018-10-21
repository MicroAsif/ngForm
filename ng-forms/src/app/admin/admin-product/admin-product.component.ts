import { ProductService } from './../../_services/Product.service';
import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  p = 1;
  productList: any;
  filterProductList: any;
  constructor(private product: ProductService) {
  this.LoadAllProducts();
  }
  LoadAllProducts() {
    this.product.getProducts().subscribe(data => {
      this.productList = data;
      this.filterProductList = data;
    });
  }

  ngOnInit() {
  }

  filter(value) {
    console.log(value);
    this.filterProductList = (value) ? this.productList.filter(p => p.Title.includes(value)) :
     this.productList;
  }

  Delete(pro) {
    console.log(pro.Id);
    if (!confirm(`Are you sure want to delete ${pro.Title} ?`)) { return; }
    const index = this.productList.indexOf(pro);
    this.productList.splice(index, 1);
    this.product.DeleteProduct(pro.Id).subscribe(null,
      err => {
        alert('Could not delete user.');
        // Revert the view back to its original state
        this.productList.splice(index, 0, pro);
      });
  }
}
