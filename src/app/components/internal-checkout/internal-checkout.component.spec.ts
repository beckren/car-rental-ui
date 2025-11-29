import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalCheckoutComponent } from './internal-checkout.component';

describe('InternalCheckoutComponent', () => {
  let component: InternalCheckoutComponent;
  let fixture: ComponentFixture<InternalCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
