import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSelectComponent } from './record-select.component';

describe('RecordSelectComponent', () => {
  let component: RecordSelectComponent;
  let fixture: ComponentFixture<RecordSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
