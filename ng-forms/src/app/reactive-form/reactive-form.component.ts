import { User } from './../_model/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userList: User[] = [];

  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.pattern('[a-zA-z][a-zA-z]+')]),
      email : new FormControl('', [Validators.required, Validators.email]),
      contact : new FormControl('', [Validators.required, Validators.minLength(10),
                    Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      password : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirm : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)])
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirm').value ? null : {'mismatch': true};
  }

  addUser() {
    this.userList = this.form.value;
    console.log(this.form.value);
  }

}
