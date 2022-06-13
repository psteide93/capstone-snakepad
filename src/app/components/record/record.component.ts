import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/assets/ultilities/services/ui.service';
import { Subscription } from 'rxjs';
import { Feeding } from 'src/assets/ultilities/models/feeding.model';
import { FeedingService } from 'src/assets/ultilities/services/feeding.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent implements OnInit {
  @Output() onAddFeeding: EventEmitter<Feeding> = new EventEmitter();

  showAddRecord: boolean = false;
  subscription!: Subscription;
  record = '';

  constructor(
    private uiService: UiService,
    private feedingService: FeedingService
  ) {
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
    // this.feedingService
    //   .addFeeding(feeding)
    //   .subscribe((feeding) => (this.feedingService.newFeeding = feeding));
    this.onAddFeeding.emit(feeding);
  }
}
