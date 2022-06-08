import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-snake-form',
  templateUrl: './add-snake-form.component.html',
  styleUrls: ['./add-snake-form.component.css'],
})
export class AddSnakeFormComponent implements OnInit {
  name!: string;
  imgUrl!: string;
  breederId!: string;
  gender: string = 'unknown';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Please add a snake!');
      return;
    }

    const newSnake = {
      name: this.name,
      imgUrl: this.imgUrl,
      breederId: this.breederId,
      gender: this.gender,
    };
  }
}
