import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmDashboardComponent } from './sm-dashboard.component';

describe('SmDashboardComponent', () => {
  let component: SmDashboardComponent;
  let fixture: ComponentFixture<SmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
