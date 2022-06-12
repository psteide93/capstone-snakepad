import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Weight } from '../models/weight.model';

type Response = {
  weights: Weight[];
};

@Injectable({
  providedIn: 'root',
})
export class WeightsService {
  constructor(private http: HttpClient) {}

  getWeights(id: number): Observable<Weight[]> {
    return this.http
      .get<Response>('http://localhost:8081/api/weights')
      .pipe(
        map((response) =>
          response.weights.filter((weight) => weight.snakeLink == id)
        )
      );
  }
}
