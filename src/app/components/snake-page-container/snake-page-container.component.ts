import { Component, OnInit } from '@angular/core';
import { Snake } from 'src/assets/ultilities/models/snake.model';
import { ActivatedRoute } from '@angular/router';
import { SnakeService } from 'src/assets/ultilities/services/snake.service';
import { FeedingService } from 'src/assets/ultilities/services/feeding.service';
import { Feeding } from 'src/assets/ultilities/models/feeding.model';
import { NotesService } from 'src/assets/ultilities/services/notes.service';
import { Note } from 'src/assets/ultilities/models/note.model';
import { ShedsService } from 'src/assets/ultilities/services/sheds.service';
import { Shed } from 'src/assets/ultilities/models/shed.model';
import { WeightsService } from 'src/assets/ultilities/services/weights.service';
import { Weight } from 'src/assets/ultilities/models/weight.model';

@Component({
  selector: 'app-snake-page-container',
  templateUrl: './snake-page-container.component.html',
  styleUrls: ['./snake-page-container.component.css'],
})
export class SnakePageContainerComponent implements OnInit {
  newFeeding?: Feeding;

  snake!: Snake;
  feedings: Feeding[] = [];
  notes: Note[] = [];
  sheds: Shed[] = [];
  weights: Weight[] = [];
  lastWeight?: Weight;
  lastMeal?: Feeding;
  nextMeal?: string;
  mealSize: string = '';

  constructor(
    private route: ActivatedRoute,
    private snakeService: SnakeService,
    private feedingService: FeedingService,
    private noteService: NotesService,
    private shedService: ShedsService,
    private weightService: WeightsService
  ) {}

  id = Number(this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.getSnake();
    this.getFeedings();
    this.getNotes();
    this.getSheds();
    this.getWeights();
    this.getLastWeight();
    this.getLastMeal();
    this.getMealSize();
  }

  getSnake() {
    this.snakeService.getSnakeById(this.id).subscribe((snake) => {
      if (snake) {
        this.snake = snake;
      }
    });
  }

  getFeedings() {
    this.feedingService
      .getFeedings(this.id)
      .subscribe((feedings) => (this.feedings = feedings));
  }

  getNewFeeding() {
    if (this.feedingService.newFeeding) {
      this.feedings = [...this.feedings, this.feedingService.newFeeding];
    }
  }

  getNotes() {
    this.noteService
      .getNotes(this.id)
      .subscribe((notes) => (this.notes = notes));
  }

  getSheds() {
    this.shedService
      .getFeedings(this.id)
      .subscribe((sheds) => (this.sheds = sheds));
  }

  getWeights() {
    this.weightService
      .getWeights(this.id)
      .subscribe((weights) => (this.weights = weights));
  }

  getLastWeight() {
    this.weightService
      .getLastWeight(this.id)
      .subscribe((weight) => (this.lastWeight = weight));
  }

  getLastMeal() {
    this.feedingService
      .getLastMeal(this.id)
      .subscribe((meal) => (this.lastMeal = meal));
  }

  getMealSize() {
    this.weightService.getLastWeight(this.id).subscribe((response) => {
      if (response.weight <= 15) {
        this.mealSize = 'Pinky';
        this.nextMeal = 'Every 7 days';
      } else if (response.weight > 16 && response.weight <= 30) {
        this.mealSize = 'Small Fuzzy';
        this.nextMeal = 'Every 7 days';
      } else if (response.weight > 31 && response.weight <= 50) {
        this.mealSize = 'Regular Fuzzy';
        this.nextMeal = 'Every 7 days';
      } else if (response.weight > 51 && response.weight <= 90) {
        this.mealSize = 'Hopper';
        this.nextMeal = 'Every 7 days';
      } else if (response.weight > 91 && response.weight <= 170) {
        this.mealSize = 'Weaned';
        this.nextMeal = 'Every 7 days';
      } else if (response.weight > 171 && response.weight <= 400) {
        this.mealSize = 'Adult';
        this.nextMeal = 'Every 10 days';
      } else {
        this.mealSize = 'Jumbo';
        this.nextMeal = 'Every 2 weeks';
      }
    });
  }

  addFeeding(feeding: Feeding) {
    console.log('ladies and gentleman we got em');
  }
}
