import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styles: [
  ]
})
export class CountryInfoComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countryService.searchByCode(id)))
      .subscribe(country => {
        const translationsArr = Object.values(country.translations);
        this.country = { ...country, translationsArr };
      });

  }

}
