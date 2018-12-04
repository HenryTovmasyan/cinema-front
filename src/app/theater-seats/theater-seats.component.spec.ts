import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterSeatsComponent } from './theater-seats.component';

describe('TheaterSeatsComponent', () => {
  let component: TheaterSeatsComponent;
  let fixture: ComponentFixture<TheaterSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
