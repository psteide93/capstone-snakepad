import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css'],
})
export class WeatherContainerComponent implements OnInit {
  showBarometricForm: boolean = false;
  subscription!: Subscription;

  constructor() {}

  ngOnInit(): void {}

  toggleBarometricForm() {
    if (this.showBarometricForm) {
      this.showBarometricForm = false;
    } else {
      this.showBarometricForm = true;
    }
  }
}
