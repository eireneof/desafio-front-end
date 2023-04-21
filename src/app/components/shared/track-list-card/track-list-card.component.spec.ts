import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListCardComponent } from './track-list-card.component';

describe('TrackListCardComponent', () => {
  let component: TrackListCardComponent;
  let fixture: ComponentFixture<TrackListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
