import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-weather-button',
  templateUrl: './weather-button.component.html',
  styleUrls: ['./weather-button.component.css'],
})
export class WeatherButtonComponent implements OnInit {
  @Input() text!: string;
  @Output() weatherButtonClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.weatherButtonClick.emit();
  }
}
