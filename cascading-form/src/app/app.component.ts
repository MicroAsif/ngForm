import { State } from './_model/State';
import { Country } from './_model/Country';
import { CountryService } from './_services/country.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
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


}
