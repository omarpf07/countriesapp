import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [ByCapitalComponent, ByCountryComponent, ByRegionComponent, CountryInfoComponent, CountryTableComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ByCapitalComponent, ByCountryComponent, ByRegionComponent, CountryInfoComponent
  ]
})
export class CountryModule { }
