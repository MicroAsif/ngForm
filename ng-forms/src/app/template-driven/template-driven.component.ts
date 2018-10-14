import { User } from './../_model/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {


  /* pattern name = "[a-zA-z][a-zA-z]+" */
  /* pattern email = "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+" */
  /* pattern phone = "[0-9]*" */

  UserList: User[] = [];
  constructor() { }

  ngOnInit() {
  }

  addUser(frm) {
    let user: User;
    user = frm.value;
    this.UserList.push(user);
    frm.reset();
  }

}
