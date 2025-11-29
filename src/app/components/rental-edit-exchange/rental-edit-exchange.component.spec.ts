import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalEditExchangeComponent } from './rental-edit-exchange.component';

describe('RentalEditExchangeComponent', () => {
  let component: RentalEditExchangeComponent;
  let fixture: ComponentFixture<RentalEditExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalEditExchangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalEditExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
