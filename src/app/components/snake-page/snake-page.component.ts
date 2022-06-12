import { Component, Input, OnInit } from '@angular/core';
import { Snake } from 'src/assets/ultilities/models/snake.model';
import { ActivatedRoute } from '@angular/router';
import { SnakeService } from 'src/assets/ultilities/services/snake.service';
import { FeedingService } from 'src/assets/ultilities/services/feeding.service';
import { Feeding } from 'src/assets/ultilities/models/feeding.model';

@Component({
  selector: 'app-snake-page',
  templateUrl: './snake-page.component.html',
  styleUrls: ['./snake-page.component.css'],
})
export class SnakePageComponent implements OnInit {
  snake!: Snake | undefined;
  feedings!: Feeding[];

  constructor(
    private route: ActivatedRoute,
    private snakeService: SnakeService,
    private feedingService: FeedingService
  ) {}

  id = Number(this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.getSnake();
    this.getFeedings();
  }

  getSnake() {
    this.snakeService
      .getSnakeById(this.id)
      .subscribe((snake) => (this.snake = snake));
  }

  getFeedings() {
    this.feedingService
      .getFeedings(this.id)
      .subscribe((feedings) => (this.feedings = feedings));
  }
}
