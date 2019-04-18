import { RootObject, List } from './weather5DayJson';
import { WeatherDataService } from './weather-data.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  city: string;
  baseimgURL = 'http://openweathermap.org/img/w/';
  imgURL: string;
  weatherStatus: string;
  currentCity: string;
  detailsAll: Array<List>;
  currentTemp: number;
  humidity: number;
  wind: number;
  windDirection: number;
  currentDate: string;

  constructor(private data: WeatherDataService) {
  }


  show5DayWeather() {
    this.data.get5DayData(this.city).subscribe((weatherData: RootObject) => {
      this.imgURL = this.baseimgURL + weatherData.list[0].weather[0].icon + '.png';
      this.weatherStatus = weatherData.list[0].weather[0].description;
      this.currentCity = weatherData.city.name + ',' + weatherData.city.country;
      this.currentTemp = Math.trunc(weatherData.list[0].main.temp - 273.15);
      this.humidity = weatherData.list[0].main.humidity;
      this.wind = weatherData.list[0].wind.speed;
      this.windDirection = weatherData.list[0].wind.deg;
      this.currentDate = new Date(weatherData.list[0].dt_txt).toDateString();
      this.fiveDayData(weatherData.list);
    });
  }

  fiveDayData(weatherDetails: Array<List>) {
    this.detailsAll = [];
    for (let index = 0; index < 5; index++) {
      this.detailsAll.push(weatherDetails[8 * index]);

    }
  }
}
