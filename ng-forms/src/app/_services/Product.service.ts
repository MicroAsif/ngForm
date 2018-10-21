import { ReactiveFormComponent } from './../reactive-form/reactive-form.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:13968/api/';
constructor (private Http: HttpClient) { }

getProducts() {
  return this.Http.get(this.baseUrl + 'product');
}
getProduct(id) {
  return this.Http.get(this.baseUrl + 'product/' + id);
}
addProduct(product) {
  return this.Http.post(this.baseUrl + 'product', product);
}
updateProduct(id, product) {
  return this.Http.put(this.baseUrl + 'product/' + id, product);
}
DeleteProduct(Id) {
  return this.Http.delete(this.baseUrl + 'product/' + Id);
}





}
