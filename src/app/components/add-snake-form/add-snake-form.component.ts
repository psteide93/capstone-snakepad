import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Snake } from 'src/assets/ultilities/models/snake.model';
import { UiService } from 'src/assets/ultilities/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-snake-form',
  templateUrl: './add-snake-form.component.html',
  styleUrls: ['./add-snake-form.component.css'],
})
export class AddSnakeFormComponent implements OnInit {
  @Output() onAddSnake: EventEmitter<Snake> = new EventEmitter();
  name!: string;
  imgUrl!: string;
  breederId!: string;
  gender: 'Male' | 'Female' | 'unknown' = 'unknown';
  showAddSnake: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddSnake = value));
  }

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

    this.onAddSnake.emit(newSnake);

    this.name = '';
    this.breederId = '';
    this.imgUrl = '';
    this.gender = 'unknown';
  }
}
