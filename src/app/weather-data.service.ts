import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherDataService {

  apiKey = 'f331c65012d531f5784faed904894040';
  baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
  base5URL = 'https://api.openweathermap.org/data/2.5/forecast?';
  query = 'q=';
  additional = '&APPID=';
  finalURL: string;

  constructor(private http: HttpClient) { }

  // getData(city: string) {
  //   this.finalURL = `${this.baseURL}${this.query}${city}${this.additional}${this.apiKey}`;
  //   return this.http.get(this.finalURL);
  // }

  get5DayData(city: string) {
    this.finalURL = `${this.base5URL}${this.query}${city}${this.additional}${this.apiKey}`;
    return this.http.get(this.finalURL);
  }
}
