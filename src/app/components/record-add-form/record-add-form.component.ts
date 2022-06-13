import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/assets/ultilities/services/ui.service';
import { ActivatedRoute } from '@angular/router';
import { FeedingService } from 'src/assets/ultilities/services/feeding.service';
import { Feeding } from 'src/assets/ultilities/models/feeding.model';
import { Shed } from 'src/assets/ultilities/models/shed.model';

@Component({
  selector: 'app-record-add-form',
  templateUrl: './record-add-form.component.html',
  styleUrls: ['./record-add-form.component.css'],
})
export class RecordAddFormComponent implements OnInit {
  @Input() record: string = '';
  @Output() onAddFeeding: EventEmitter<Feeding> = new EventEmitter();
  @Output() onAddShed: EventEmitter<Shed> = new EventEmitter();
  showAddRecord = false;
  subscription: Subscription;
  feedingDate: string = '';
  shedDate: string = '';
  foodItem: string = '';
  observation: string = '';
  snakeLink = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private uiService: UiService, private route: ActivatedRoute) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddRecord = value));
  }

  ngOnInit(): void {}

  onSubmitFeeding() {
    const newFeeding: Feeding = {
      date: this.dateConverter(this.feedingDate),
      item: this.foodItem,
      snakeLink: this.snakeLink,
    };

    this.onAddFeeding.emit(newFeeding);

    this.feedingDate = '';
    this.foodItem = '';
  }

  onSubmitShed() {
    const newShed: Shed = {
      date: this.dateConverter(this.shedDate),
      observation: this.observation,
      snakeLink: this.snakeLink,
    };
    console.log(newShed);
    this.onAddShed.emit(newShed);

    this.shedDate = '';
    this.observation = '';
  }

  dateConverter(date: string) {
    return `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`;
  }
}
