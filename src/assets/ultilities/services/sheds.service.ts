import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Shed } from '../models/shed.model';

type Response = {
  sheds: Shed[];
};

@Injectable({
  providedIn: 'root',
})
export class ShedsService {
  constructor(private http: HttpClient) {}

  getFeedings(id: number): Observable<Shed[]> {
    return this.http
      .get<Response>('http://localhost:8081/api/sheds')
      .pipe(
        map((response) => response.sheds.filter((shed) => shed.snakeLink == id))
      );
  }
}
