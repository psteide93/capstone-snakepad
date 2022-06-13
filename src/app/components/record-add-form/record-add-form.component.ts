import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/assets/ultilities/services/ui.service';
import { ActivatedRoute } from '@angular/router';
import { FeedingService } from 'src/assets/ultilities/services/feeding.service';
import { Feeding } from 'src/assets/ultilities/models/feeding.model';

@Component({
  selector: 'app-record-add-form',
  templateUrl: './record-add-form.component.html',
  styleUrls: ['./record-add-form.component.css'],
})
export class RecordAddFormComponent implements OnInit {
  @Input() record: string = '';
  @Output() onAddFeeding: EventEmitter<Feeding> = new EventEmitter();
  showAddRecord = false;
  subscription: Subscription;
  date: string = '';
  foodItem: string = '';
  snakeLink = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private uiService: UiService,
    private route: ActivatedRoute,
    feedingService: FeedingService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddRecord = value));
  }

  ngOnInit(): void {}

  onSubmitFeeding() {
    const newFeeding: Feeding = {
      date: this.dateConverter(this.date),
      item: this.foodItem,
      snakeLink: this.snakeLink,
    };

    this.onAddFeeding.emit(newFeeding);

    this.date = '';
    this.foodItem = '';
  }

  dateConverter(date: string) {
    return `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`;
  }
}
