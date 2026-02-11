import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsDonations } from './referrals-donations';

describe('ReferralsDonations', () => {
  let component: ReferralsDonations;
  let fixture: ComponentFixture<ReferralsDonations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralsDonations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralsDonations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
