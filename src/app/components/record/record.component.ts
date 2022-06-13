import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/assets/ultilities/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent implements OnInit {
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
}
