import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/assets/ultilities/services/ui.service';
import { Subscription } from 'rxjs';
import { Feeding } from 'src/assets/ultilities/models/feeding.model';
import { Shed } from 'src/assets/ultilities/models/shed.model';
import { Weight } from 'src/assets/ultilities/models/weight.model';
import { Note } from 'src/assets/ultilities/models/note.model';
import { Snake } from 'src/assets/ultilities/models/snake.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent implements OnInit {
  @Output() onAddFeeding: EventEmitter<Feeding> = new EventEmitter();
  @Output() onAddShed: EventEmitter<Shed> = new EventEmitter();
  @Output() onAddWeight: EventEmitter<Weight> = new EventEmitter();
  @Output() onAddNote: EventEmitter<Note> = new EventEmitter();
  @Output() onUpdate: EventEmitter<Snake> = new EventEmitter();

  showAddRecord: boolean = false;
  subscription!: Subscription;
  record = '';

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddRecord = value));
  }

  ngOnInit(): void {}

  toggleAddRecord() {
    this.uiService.toggleAddRecord();
  }

  storeRecord(record: string) {
    this.record = record;
  }

  addFeeding(feeding: Feeding) {
    this.onAddFeeding.emit(feeding);
  }

  addShed(shed: Shed) {
    this.onAddShed.emit(shed);
  }

  addWeight(weight: Weight) {
    this.onAddWeight.emit(weight);
  }

  addNote(note: Note) {
    this.onAddNote.emit(note);
  }

  updateSnake(snake: Snake) {
    this.onUpdate.emit(snake);
  }
}
