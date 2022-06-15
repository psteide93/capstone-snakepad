import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Snake } from 'src/assets/ultilities/models/snake.model';
import { FeedingService } from 'src/assets/ultilities/services/feeding.service';
import { Feeding } from 'src/assets/ultilities/models/feeding.model';
import { WeightsService } from 'src/assets/ultilities/services/weights.service';
import { NotesService } from 'src/assets/ultilities/services/notes.service';

@Component({
  selector: 'app-snake-card',
  templateUrl: './snake-card.component.html',
  styleUrls: ['./snake-card.component.css'],
})
export class SnakeCardComponent implements OnInit {
  @Output() buttonClick = new EventEmitter();
  lastMeal?: Feeding;
  mealSize?: string;
  nextMeal?: string;
  lastNote?: string;

  constructor(
    private feedingService: FeedingService,
    private weightService: WeightsService,
    private noteService: NotesService
  ) {}

  ngOnInit(): void {
    this.getLastMeal();
    this.getMealSize();
    this.getLastNote();
  }

  @Input() snake!: Snake;
  @Input() id!: number;

  getLastMeal() {
    if (this.snake) {
      this.feedingService
        .getLastMeal(this.id)
        .subscribe((meal) => (this.lastMeal = meal));
    }
  }

  getMealSize() {
    this.weightService.getLastWeight(this.id).subscribe((response) => {
      if (response && response.weight <= 15) {
        this.mealSize = 'Pinky';
        this.nextMeal = 'Every 7 days';
      } else if (response && response.weight > 16 && response.weight <= 30) {
        this.mealSize = 'Small Fuzzy';
        this.nextMeal = 'Every 7 days';
      } else if (response && response.weight > 31 && response.weight <= 50) {
        this.mealSize = 'Regular Fuzzy';
        this.nextMeal = 'Every 7 days';
      } else if (response && response.weight > 51 && response.weight <= 90) {
        this.mealSize = 'Hopper';
        this.nextMeal = 'Every 7 days';
      } else if (response && response.weight > 91 && response.weight <= 170) {
        this.mealSize = 'Weaned';
        this.nextMeal = 'Every 7 days';
      } else if (response && response.weight > 171 && response.weight <= 400) {
        this.mealSize = 'Adult';
        this.nextMeal = 'Every 10 days';
      } else if (response) {
        this.mealSize = 'Jumbo';
        this.nextMeal = 'Every 2 weeks';
      }
    });
  }

  getLastNote() {
    this.noteService.getLastNote(this.id).subscribe((response) => {
      if (response) {
        this.lastNote = response.note;
      }
    });
  }

  onClick() {
    this.buttonClick.emit(this.snake);
  }
}
