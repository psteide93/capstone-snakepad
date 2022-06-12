import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake-page',
  templateUrl: './snake-page.component.html',
  styleUrls: ['./snake-page.component.css'],
})
export class SnakePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imgUrl = 'https://i.imgur.com/wHtR7qx.jpg';

  snake = {
    name: 'No Feet',
    breederId: 'BO-22-01',
    lastMeal: '06/05/2022',
    nextMeal: '06/10/2022',
    mealSize: 'Pinky',
    currentWeight: '8',
    gender: 'Male',
    feedings: [
      { date: '06/12/2022', item: 'stinky' },
      { date: '06/12/2022', item: 'pinky' },
      { date: '06/12/2022', item: 'pinky' },
      { date: '06/12/2022', item: 'stinky' },
      { date: '06/12/2022', item: 'pinky' },
    ],
    sheds: [
      { date: '06/12/2022', item: 'noticed' },
      { date: '06/12/2022', item: 'shed' },
      { date: '06/12/2022', item: 'noticed' },
      { date: '06/12/2022', item: 'shed' },
    ],
    weights: [
      { date: '06/12/2022', item: 8 },
      { date: '06/12/2022', item: 12 },
      { date: '06/12/2022', item: 13 },
      { date: '06/12/2022', item: 15 },
    ],
    notes: [
      { date: '06/12/2022', note: "Tis' just a baby" },
      { date: '06/13/2022', note: 'Still a baby' },
    ],
  };
}
