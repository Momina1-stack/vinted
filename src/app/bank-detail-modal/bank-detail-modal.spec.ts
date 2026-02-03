import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetailModal } from './bank-detail-modal';

describe('BankDetailModal', () => {
  let component: BankDetailModal;
  let fixture: ComponentFixture<BankDetailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankDetailModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankDetailModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
