import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsWork } from './referrals-work';

describe('ReferralsWork', () => {
  let component: ReferralsWork;
  let fixture: ComponentFixture<ReferralsWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralsWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralsWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
