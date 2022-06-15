import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Snake } from '../models/snake.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SnakeResponse } from '../models/snakeResponse.model';
import { AuthService } from '@auth0/auth0-angular';

type Response = {
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
  snakes: Snake[] = [];
  user?: string = '';

  constructor(private http: HttpClient, public auth: AuthService) {}

  fetchSnakes(): Observable<Snake[]> {
    this.auth.user$.subscribe((profile) => (this.user = profile!.email));
    return this.http
      .get<SnakeResponse>('https://colubrid-tracker.herokuapp.com/api/snakes')
      .pipe(
        map((response) =>
          response.snakes.filter((snake) => snake.owner === this.user)
        )
      );
  }

  refreshSnakeList() {
    this.fetchSnakes().subscribe((snakes) => {
      this.snakes = [...snakes];
    });
  }

  addSnake(snake: Snake): Observable<Response> {
    return this.http.post<Response>(
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

  updateSnake(snake: Snake, id: number): Observable<Snake> {
    return this.http
      .put<Snake>(
        `https://colubrid-tracker.herokuapp.com/api/snakes/${id}`,
        snake,
        httpOptions
      )
      .pipe(map((response: Snake) => response));
  }

  deleteSnake(snake: Snake) {
    return this.http.delete<Snake>(
      `https://colubrid-tracker.herokuapp.com/api/snakes/${snake.id}`
    );
  }
}
