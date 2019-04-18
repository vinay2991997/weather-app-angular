import { List } from './../weather5DayJson';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent implements OnInit {

  @Input() details: List;
  currentDay: string;
  imageURL: string;
  baseimgURL = 'http://openweathermap.org/img/w/';
  maxTemp: number;
  minTemp: number;
  status: string;

  constructor() {
  }

  ngOnInit() {
    const date = new Date(this.details.dt_txt);
    this.currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    this.imageURL = this.baseimgURL + this.details.weather[0].icon + '.png';
    this.maxTemp = Math.trunc(this.details.main.temp_max - 273.15);
    this.minTemp = Math.trunc(this.details.main.temp_min - 273.15);
    this.status = this.details.weather[0].description;
  }




}
