import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { VehicleMaintenanceHistoryComponent } from './vehicle-maintenance-history.component';

describe('VehicleMaintenanceHistoryComponent', () => {
  let component: VehicleMaintenanceHistoryComponent;
  let fixture: ComponentFixture<VehicleMaintenanceHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMaintenanceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
