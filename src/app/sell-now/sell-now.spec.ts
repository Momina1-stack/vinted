import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellNow } from './sell-now';

describe('SellNow', () => {
  let component: SellNow;
  let fixture: ComponentFixture<SellNow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellNow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellNow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
