import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagItems } from './bag-items';

describe('BagItems', () => {
  let component: BagItems;
  let fixture: ComponentFixture<BagItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
