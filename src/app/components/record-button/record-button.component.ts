import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-record-button',
  templateUrl: './record-button.component.html',
  styleUrls: ['./record-button.component.css'],
})
export class RecordButtonComponent implements OnInit {
  @Input() text!: string;
  @Output() buttonClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.buttonClick.emit();
  }
}
