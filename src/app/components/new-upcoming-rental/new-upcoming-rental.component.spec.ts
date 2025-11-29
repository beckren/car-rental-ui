import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUpcomingRentalComponent } from './new-upcoming-rental.component';

describe('NewUpcomingRentalComponent', () => {
  let component: NewUpcomingRentalComponent;
  let fixture: ComponentFixture<NewUpcomingRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUpcomingRentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUpcomingRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
