import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Snake } from 'src/assets/ultilities/models/snake.model';
import { UiService } from 'src/assets/ultilities/services/ui.service';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-snake-form',
  templateUrl: './add-snake-form.component.html',
  styleUrls: ['./add-snake-form.component.css'],
})
export class AddSnakeFormComponent implements OnInit {
  @Output() onAddSnake: EventEmitter<Snake> = new EventEmitter();
  owner!: string;
  name!: string;
  imgUrl!: string;
  breederId!: string;
  gender: 'Male' | 'Female' | 'Unknown' = 'Unknown';
  showAddSnake: boolean = false;
  subscription!: Subscription;
  profileJson: string = '';

  eMail?: string = '';

  constructor(public auth: AuthService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddSnake = value));
  }

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => (this.eMail = profile!.email));
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a snake!');
      return;
    }

    const newSnake = {
      owner: this.eMail,
      name: this.name,
      imgUrl: this.imgUrl,
      breederId: this.breederId,
      gender: this.gender,
    };

    this.onAddSnake.emit(newSnake);

    this.name = '';
    this.breederId = '';
    this.imgUrl = '';
    this.gender = 'Unknown';
  }
}
