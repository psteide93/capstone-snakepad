import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Feeding } from '../models/feeding.model';

type Response = {
  feedings: Feeding[];
};

@Injectable({
  providedIn: 'root',
})
export class FeedingService {
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
}
