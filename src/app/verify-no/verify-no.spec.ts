import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyNo } from './verify-no';

describe('VerifyNo', () => {
  let component: VerifyNo;
  let fixture: ComponentFixture<VerifyNo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyNo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyNo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
