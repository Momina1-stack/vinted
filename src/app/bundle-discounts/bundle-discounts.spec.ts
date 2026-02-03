import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleDiscounts } from './bundle-discounts';

describe('BundleDiscounts', () => {
  let component: BundleDiscounts;
  let fixture: ComponentFixture<BundleDiscounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleDiscounts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleDiscounts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
