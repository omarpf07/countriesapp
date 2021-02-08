import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {
    this.activateRegion(this.regions[0]);
  }

  activateRegion(region: string) {
    if (region === this.activeRegion) return;
    this.activeRegion = region;
    this.getCountriesByRegion(this.activeRegion);
  }

  getActiveClass(region: string): string {
    return (this.activeRegion === region) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  getCountriesByRegion(region: string): void {
    this.countryService.searchByRegion(region).subscribe(countries => {
      this.countries = countries;
    })
  }

}
