import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestMenuComponent } from './manifest-menu.component';

describe('ManifestMenuComponent', () => {
  let component: ManifestMenuComponent;
  let fixture: ComponentFixture<ManifestMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManifestMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManifestMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
