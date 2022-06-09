import { Component } from '@angular/core';
import { Snake } from 'src/assets/ultilities/models/snake.model';
import { SnakeService } from 'src/assets/ultilities/services/snake.service';
import { UiService } from 'src/assets/ultilities/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ColubridTracker';
  snakes: Snake[] = [];
  showAddSnake: boolean = false;
  subscription!: Subscription;

  constructor(
    private snakeService: SnakeService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddSnake = value));
  }

  ngOnInit() {
    this.snakeService
      .fetchSnakes()
      .subscribe((response) => (this.snakes = response.snakes));
  }

  addSnake(snake: Snake) {
    console.log(snake);
    this.snakeService
      .addSnake(snake)
      .subscribe(
        (response) => (this.snakes = [...this.snakes, response.snake])
      );
  }

  toggleAddSnake() {
    this.uiService.toggleAddSnake();
  }
}

// .subscribe((snake) => this.snakes.push(snake));
