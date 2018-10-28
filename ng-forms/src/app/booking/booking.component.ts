import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from '../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  minDate: Date;
  checkInDate;
  checkOutDate;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor() {
    this.bsConfig = Object.assign({},
      { containerClass: 'theme-red' },
      { showWeekNumbers: false },
      { minDate: new Date() }
    );
   }

  ngOnInit() {
  }

}
