import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs';
import { Snake } from '../models/snake.model';

@Injectable({
  providedIn: 'root',
})
export class SnakeService {
  constructor() {}

  snakes: Snake[] = [
    {
      name: 'Bean',
      id: 'AA-19-01',
      sex: 'Female',
      lastMeal: '06/04/2022',
      lastNote:
        'She just laid her second clutch of eggs, 13 eggs total, but only 3 fertile. Currently in her post-lay shed',
    },

    {
      name: 'Bean2',
      id: 'AA-19-01',
      sex: 'Female',
      lastMeal: '06/04/2022',
      lastNote:
        'She just laid her second clutch of eggs, 13 eggs total, but only 3 fertile. Currently in her post-lay shed',
    },
    {
      name: 'Bean3',
      id: 'AA-19-01',
      sex: 'Female',
      lastMeal: '06/04/2022',
      lastNote:
        'She just laid her second clutch of eggs, 13 eggs total, but only 3 fertile. Currently in her post-lay shed',
    },
  ];
}
