import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakePictureComponent } from './snake-picture.component';

describe('SnakePictureComponent', () => {
  let component: SnakePictureComponent;
  let fixture: ComponentFixture<SnakePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnakePictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
