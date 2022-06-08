import { Component } from '@angular/core';
import { Snake } from 'src/assets/ultilities/models/snake.model';
import { SnakeService } from 'src/assets/ultilities/services/snake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ColubridTracker';
  snakes: Snake[] = [];

  constructor(private snakeService: SnakeService) {}

  ngOnInit() {
    this.snakeService
      .fetchSnakes()
      .subscribe((snakes) => (this.snakes = snakes));
  }
}
