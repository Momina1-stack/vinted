import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingItems } from './finding-items';

describe('FindingItems', () => {
  let component: FindingItems;
  let fixture: ComponentFixture<FindingItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindingItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindingItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
