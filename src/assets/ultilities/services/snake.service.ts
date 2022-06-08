import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Snake } from '../models/snake.model';
import { HttpClient } from '@angular/common/http';
import { SnakeResponse } from '../models/snakeResponse.model';

@Injectable({
  providedIn: 'root',
})
export class SnakeService {
  constructor(private http: HttpClient) {}

  fetchSnakes(): Observable<SnakeResponse> {
    return this.http.get<SnakeResponse>('http://localhost:8081/api/snakes');
  }
}
