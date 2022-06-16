import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snake-picture',
  templateUrl: './snake-picture.component.html',
  styleUrls: ['./snake-picture.component.css'],
})
export class SnakePictureComponent {
  @Input() imgUrl!: string;
  @Input() size!: number;
}
