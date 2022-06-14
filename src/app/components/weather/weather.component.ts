import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/assets/ultilities/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  @Input() showBarometricForm!: boolean;
  pressure = 0;
  city = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getPressure(city: string) {
    this.weatherService
      .getBarimeticPressure(city)
      .subscribe((response) => (this.pressure = response.current.pressure_mb));
  }

  storeCity(city: string) {
    this.city = city;
    this.getPressure(city);
  }
}
