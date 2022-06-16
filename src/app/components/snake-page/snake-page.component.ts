import { Component, Input, OnInit, Output } from '@angular/core';
import { Snake } from 'src/assets/ultilities/models/snake.model';
import { Feeding } from 'src/assets/ultilities/models/feeding.model';
import { Note } from 'src/assets/ultilities/models/note.model';
import { Shed } from 'src/assets/ultilities/models/shed.model';
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

  ngOnInit(): void {}
}
