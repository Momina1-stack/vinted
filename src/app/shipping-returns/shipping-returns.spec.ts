import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingReturns } from './shipping-returns';

describe('ShippingReturns', () => {
  let component: ShippingReturns;
  let fixture: ComponentFixture<ShippingReturns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingReturns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingReturns);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
