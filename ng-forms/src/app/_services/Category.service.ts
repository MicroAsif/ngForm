import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
constructor(private http: HttpClient) { }

baseUrl = 'http://localhost:13968/api/';



getCategoiesDb() {
  return this.http.get(this.baseUrl + 'categories');
}
addCategory(category) {
  this.http.post(this.baseUrl + 'categories', category).subscribe(data => {
    console.log(data);
  });
}

getCategories() {
  return [
    {id: 1, name: 'Fruit'},
    {id: 2, name: 'Bread'},
    {id: 3, name: 'Vegetable'},
    {id: 4, name: 'Other'}
  ];
}

}
