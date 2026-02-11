import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingItems } from './getting-items';

describe('GettingItems', () => {
  let component: GettingItems;
  let fixture: ComponentFixture<GettingItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettingItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettingItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
