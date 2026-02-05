import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingModal } from './checking-modal';

describe('CheckingModal', () => {
  let component: CheckingModal;
  let fixture: ComponentFixture<CheckingModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckingModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
