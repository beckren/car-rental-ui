import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageMarkerComponent } from './damage-marker.component';

describe('DamageMarkerComponent', () => {
  let component: DamageMarkerComponent;
  let fixture: ComponentFixture<DamageMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DamageMarkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamageMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
