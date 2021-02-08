import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url: string = 'https://restcountries.eu/rest/v2'

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  searchByCountry(term: string): Observable<Country[]> {

    const url = `${this.url}/name/${term}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByCapital(term: string): Observable<Country[]> {

    const url = `${this.url}/capital/${term}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }


  searchByCode(code: string): Observable<Country> {
    const url = `${this.url}/alpha/${code}`;

    return this.http.get<Country>(url);

  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.url}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
