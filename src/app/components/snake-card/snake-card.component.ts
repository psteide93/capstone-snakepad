import { Component, OnInit } from '@angular/core';
import { Snake } from 'src/assets/ultilities/models/snake.model';

@Component({
  selector: 'app-snake-card',
  templateUrl: './snake-card.component.html',
  styleUrls: ['./snake-card.component.css'],
})
export class SnakeCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  snake: Snake = {
    name: 'Bean',
    id: 'AA-19-01',
    sex: 'Female',
    lastMeal: '06/04/2022',
    lastNote:
      'She just laid her second clutch of eggs, 13 eggs total, but only 3 fertile. Currently in her post-lay shed',
  };
}
