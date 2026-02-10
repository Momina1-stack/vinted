import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingBasics } from './selling-basics';

describe('SellingBasics', () => {
  let component: SellingBasics;
  let fixture: ComponentFixture<SellingBasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellingBasics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingBasics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
