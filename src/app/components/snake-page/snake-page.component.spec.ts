import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakePageComponent } from './snake-page.component';

describe('SnakePageComponent', () => {
  let component: SnakePageComponent;
  let fixture: ComponentFixture<SnakePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnakePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
