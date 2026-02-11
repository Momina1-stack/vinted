import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannedAcc } from './banned-acc';

describe('BannedAcc', () => {
  let component: BannedAcc;
  let fixture: ComponentFixture<BannedAcc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannedAcc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannedAcc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
