import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeListingComponent } from './snake-listing.component';

describe('SnakeListingComponent', () => {
  let component: SnakeListingComponent;
  let fixture: ComponentFixture<SnakeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnakeListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
