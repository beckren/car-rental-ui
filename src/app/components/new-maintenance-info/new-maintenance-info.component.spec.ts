import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMaintenanceInfoComponent } from './new-maintenance-info.component';

describe('NewMaintenanceInfoComponent', () => {
  let component: NewMaintenanceInfoComponent;
  let fixture: ComponentFixture<NewMaintenanceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMaintenanceInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMaintenanceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
