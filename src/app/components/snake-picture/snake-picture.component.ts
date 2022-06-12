import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake-picture',
  templateUrl: './snake-picture.component.html',
  styleUrls: ['./snake-picture.component.css'],
})
export class SnakePictureComponent implements OnInit {
  @Input() imgUrl!: string;
  @Input() size!: number;

  constructor() {}

  ngOnInit(): void {}
}
