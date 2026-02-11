import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingBasics } from './buying-basics';

describe('BuyingBasics', () => {
  let component: BuyingBasics;
  let fixture: ComponentFixture<BuyingBasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyingBasics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyingBasics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
