import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailVideoComponent } from './card-detail-video.component';

describe('CardDetailVideoComponent', () => {
  let component: CardDetailVideoComponent;
  let fixture: ComponentFixture<CardDetailVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
