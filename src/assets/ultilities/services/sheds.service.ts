import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Shed } from '../models/shed.model';

type Response = {
  sheds: Shed[];
};

type SingleResponse = {
  shed: Shed;
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ShedsService {
  constructor(private http: HttpClient) {}

  getSheds(id: number): Observable<Shed[]> {
    return this.http
      .get<Response>('https://colubrid-tracker.herokuapp.com/api/sheds')
      .pipe(
        map((response) => response.sheds.filter((shed) => shed.snakeLink == id))
      );
  }

  addShed(shed: Shed): Observable<SingleResponse> {
    return this.http.post<SingleResponse>(
      'https://colubrid-tracker.herokuapp.com/api/sheds',
      shed,
      httpOptions
    );
  }
}
