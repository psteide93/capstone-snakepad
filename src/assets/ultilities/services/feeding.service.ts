import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Feeding } from '../models/feeding.model';

type Response = {
  feedings: Feeding[];
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FeedingService {
  newFeeding?: Feeding;

  constructor(private http: HttpClient) {}

  getFeedings(id: number): Observable<Feeding[]> {
    return this.http
      .get<Response>('http://localhost:8081/api/feedings')
      .pipe(
        map((response) =>
          response.feedings.filter((feeding) => feeding.snakeLink == id)
        )
      );
  }

  getLastMeal(id: number): Observable<Feeding> {
    return this.getFeedings(id).pipe(
      map((feeding) => feeding[feeding.length - 1])
    );
  }

  addFeeding(feeding: Feeding): Observable<Feeding> {
    return this.http.post<Feeding>(
      'http://localhost:8081/api/feedings',
      feeding,
      httpOptions
    );
  }
}
