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
  @Input() snake!: Snake;
  @Input() feedings?: Feeding[];
  @Input() notes: Note[] = [];
  @Input() sheds: Shed[] = [];
  @Input() weights: Weight[] = [];
  @Input() lastWeight?: Weight;
  @Input() lastMeal?: string;
  @Input() nextMeal?: string;
  @Input() mealSize: string = '';

  constructor() {}

  ngOnInit(): void {}
}
