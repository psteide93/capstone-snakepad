import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Snake } from '../models/snake.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SnakeResponse } from '../models/snakeResponse.model';
import { AuthService } from '@auth0/auth0-angular';

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
  constructor(private http: HttpClient, public auth: AuthService) {}

  fetchSnakes(): Observable<Snake[]> {
    const user = this.auth.user$.subscribe((profile) => profile!.email);
    return this.http
      .get<SnakeResponse>('https://colubrid-tracker.herokuapp.com/api/snakes')
      .pipe(
        map((response) =>
          response.snakes.filter((snake) => snake.owner === 'psteide@ford.com')
        )
      );
  }

  addSnake(snake: Snake): Observable<response> {
    return this.http.post<response>(
      'https://colubrid-tracker.herokuapp.com/api/snakes',
      snake,
      httpOptions
    );
  }

  getSnakeById(id: number): Observable<Snake | undefined> {
    return this.fetchSnakes().pipe(
      map((snake) => snake.find((snake) => snake.id === id))
    );
  }
}
