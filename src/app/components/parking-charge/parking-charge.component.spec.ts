import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingChargeComponent } from './parking-charge.component';

describe('ParkingChargeComponent', () => {
  let component: ParkingChargeComponent;
  let fixture: ComponentFixture<ParkingChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingChargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
