import { Component, OnInit } from '@angular/core';
import { Country } from '../_model/Country';
import { State } from '../_model/State';
import { CountryService } from '../_services/country.service';

@Component({
  selector: 'app-cascading-dropdown',
  templateUrl: './cascading-dropdown.component.html',
  styleUrls: ['./cascading-dropdown.component.css']
})
export class CascadingDropdownComponent implements OnInit {

  selectedCountry: Country = new Country(0, 'India');
  Countries: Country[];
  States: State[];
  constructor(private countryService: CountryService) {
    this.Countries = this.countryService.getCountries();
  }

  onSelect(countryId: number) {
    console.log(countryId);
    this.States = this.countryService.getStates().filter(x => x.countryId == countryId);
  }
  ngOnInit() {

  }

}
