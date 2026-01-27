import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyCenter } from './privacy-center';

describe('PrivacyCenter', () => {
  let component: PrivacyCenter;
  let fixture: ComponentFixture<PrivacyCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyCenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyCenter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
