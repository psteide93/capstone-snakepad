import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  key = `e5bb3cfa893f49d4802150050221406`;
  constructor(private http: HttpClient) {}

  getBarimeticPressure(city: string): Observable<any> {
    return this.http.get<any>(this.urlGenerator(city));
  }

  urlGenerator(city: string) {
    return `https://api.weatherapi.com/v1/current.json?key=${this.key}&q=${city}&aqi=no`;
  }
}
