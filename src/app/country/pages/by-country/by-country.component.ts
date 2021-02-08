import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;


  constructor(private countryService: CountryService) { }

  search(term: string): void {
    this.term = term;
    this.isError = false;
    this.showSuggestions = false;
    this.countryService.searchByCountry(this.term).subscribe(countries => {
      this.countries = countries;
    }, error => {
      this.isError = true;
      this.countries = [];
      console.log(error);
    });
  }

  suggestions(term: string) {
    this.isError = false;
    this.term = term;
    this.showSuggestions = true;
    this.countryService.searchByCountry(term).subscribe(countries => {
      this.suggestedCountries = countries.splice(0, 4);
    }, error => this.suggestedCountries = [])
  }
}
