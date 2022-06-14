import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddSnake: boolean = false;
  private showAddRecord: boolean = false;
  private showBarometricForm: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddSnake(): void {
    this.showAddSnake = !this.showAddSnake;
    this.subject.next(this.showAddSnake);
  }

  toggleAddRecord(): void {
    this.showAddRecord = !this.showAddRecord;
    this.subject.next(this.showAddRecord);
  }

  toggleBarometericPressure(): void {
    this.showBarometricForm = !this.showBarometricForm;
    this.subject.next(this.showBarometricForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
