import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Snake } from 'src/assets/ultilities/models/snake.model';
import { SnakeService } from 'src/assets/ultilities/services/snake.service';
import { UiService } from 'src/assets/ultilities/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-snake-listing',
  templateUrl: './snake-listing.component.html',
  styleUrls: ['./snake-listing.component.css'],
})
export class SnakeListingComponent implements OnInit {
  snakes: Snake[] = [];
  showAddSnake: boolean = false;
  subscription!: Subscription;
  profileJson: string = '';

  constructor(
    private snakeService: SnakeService,
    private uiService: UiService,
    public auth: AuthService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddSnake = value));
  }

  ngOnInit() {
    this.snakeService
      .fetchSnakes()
      .subscribe((snakes) => (this.snakes = [...snakes]));
    this.grabUserData();
  }

  grabUserData() {
    this.auth.user$.subscribe((profile) => {
      this.profileJson = JSON.stringify(profile, null, 2);
    });
  }

  addSnake(snake: Snake) {
    this.snakeService
      .addSnake(snake)
      .subscribe(
        (response) => (this.snakes = [...this.snakes, response.snake])
      );
  }

  toggleAddSnake() {
    this.uiService.toggleAddSnake();
  }

  deleteSnake(snake: Snake) {
    this.snakeService
      .deleteSnake(snake)
      .subscribe(
        () => (this.snakes = this.snakes.filter((s) => s.id !== snake.id))
      );
  }
}
