import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-snake-page',
  templateUrl: './snake-page.component.html',
  styleUrls: ['./snake-page.component.css'],
})
export class SnakePageComponent implements OnInit {
  snake!: Snake | undefined;
  feedings: Feeding[] = [];
  notes: Note[] = [];
  sheds: Shed[] = [];
  weights: Weight[] = [];

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

  getNotes() {
    this.noteService
      .getFeedings(this.id)
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
}
