import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Weight } from '../models/weight.model';

type Response = {
  weights: Weight[];
};

type SingleResponse = {
  weight: Weight;
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
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

  getLastWeight(id: number): Observable<Weight> {
    return this.getWeights(id).pipe(
      map((weights) => weights[weights.length - 1])
    );
  }

  addWeight(weight: Weight): Observable<SingleResponse> {
    return this.http.post<SingleResponse>(
      'http://localhost:8081/api/weights',
      weight,
      httpOptions
    );
  }

  getMealSizeByWeight(weight: number) {
    if (weight <= 15) {
      return 'Pinky';
    } else if (weight > 16 && weight <= 30) {
      return 'Small Fuzzy';
    } else if (weight > 31 && weight <= 50) {
      return 'Regular Fuzzy';
    } else if (weight > 51 && weight <= 90) {
      return 'Hopper';
    } else if (weight > 91 && weight <= 170) {
      return 'Weaned';
    } else if (weight > 171 && weight <= 400) {
      return 'Adult';
    } else {
      return 'Jumbo';
    }
  }

  getMealFequencyByWeight(weight: number) {
    if (weight <= 15) {
      return 'Every 4 days';
    } else if (weight > 16 && weight <= 30) {
      return 'Every 7 days';
    } else if (weight > 31 && weight <= 50) {
      return 'Every 7 days';
    } else if (weight > 51 && weight <= 90) {
      return 'Every 7 days';
    } else if (weight > 91 && weight <= 170) {
      return 'Every 7 days';
    } else if (weight > 171 && weight <= 400) {
      return 'Every 10 days';
    } else {
      return 'Every 2 Weeks';
    }
  }
}
