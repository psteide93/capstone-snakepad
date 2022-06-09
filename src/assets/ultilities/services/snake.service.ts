import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Snake } from '../models/snake.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SnakeResponse } from '../models/snakeResponse.model';

type response = {
  snake: Snake;
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SnakeService {
  constructor(private http: HttpClient) {}

  fetchSnakes(): Observable<SnakeResponse> {
    return this.http.get<SnakeResponse>('http://localhost:8081/api/snakes');
  }

  addSnake(snake: Snake): Observable<response> {
    return this.http.post<response>(
      'http://localhost:8081/api/snakes',
      snake,
      httpOptions
    );
  }
}
