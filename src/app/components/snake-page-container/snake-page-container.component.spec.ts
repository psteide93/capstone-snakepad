import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakePageContainerComponent } from './snake-page-container.component';

describe('SnakePageContainerComponent', () => {
  let component: SnakePageContainerComponent;
  let fixture: ComponentFixture<SnakePageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnakePageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakePageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
