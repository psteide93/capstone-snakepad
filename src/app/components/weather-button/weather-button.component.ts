import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-weather-button',
  templateUrl: './weather-button.component.html',
  styleUrls: ['./weather-button.component.css'],
})
export class WeatherButtonComponent {
  @Input() text!: string;
  @Output() weatherButtonClick = new EventEmitter();

  onClick() {
    this.weatherButtonClick.emit();
  }
}
