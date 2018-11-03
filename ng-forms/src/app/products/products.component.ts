import { CategoryService } from './../_services/Category.service';
import { ProductService } from './../_services/Product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  filteredProducts: any = [];
  categories;
  category;
  constructor(private productService: ProductService, private  categoryService: CategoryService,
              private route: ActivatedRoute) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);

      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
                            this.products.filter(x => x.Category.Name === this.category)
                            : this.products;
      });
    });

    this.categoryService.getCategoiesDb().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  ngOnInit() {
  }

}
