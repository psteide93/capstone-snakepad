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

  constructor(private snakeService: SnakeService) {}

  snakes: Snake[] = this.snakeService.snakes;
}
