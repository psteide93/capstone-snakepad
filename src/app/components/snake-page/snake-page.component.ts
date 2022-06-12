import { Component, Input, OnInit } from '@angular/core';
import { Snake } from 'src/assets/ultilities/models/snake.model';
import { ActivatedRoute } from '@angular/router';
import { SnakeService } from 'src/assets/ultilities/services/snake.service';

@Component({
  selector: 'app-snake-page',
  templateUrl: './snake-page.component.html',
  styleUrls: ['./snake-page.component.css'],
})
export class SnakePageComponent implements OnInit {
  snake!: Snake | undefined;

  constructor(
    private route: ActivatedRoute,
    private snakeService: SnakeService
  ) {}

  id = Number(this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.getSnake();
  }

  getSnake() {
    this.snakeService
      .getSnakeById(this.id)
      .subscribe((snake) => (this.snake = snake));
  }
}
