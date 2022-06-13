import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-add-form',
  templateUrl: './record-add-form.component.html',
  styleUrls: ['./record-add-form.component.css'],
})
export class RecordAddFormComponent implements OnInit {
  @Input() record: string = '';

  constructor() {}

  ngOnInit(): void {}
}
