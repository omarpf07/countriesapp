import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(term: string): void {
    this.term = term;
    this.isError = false;
    this.countryService.searchByCapital(this.term).subscribe(countries => {
      this.countries = countries;
    }, error => {
      this.isError = true;
      this.countries = [];
      console.log(error);
    });
  }

}
