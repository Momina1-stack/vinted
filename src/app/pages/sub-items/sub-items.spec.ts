import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubItems } from './sub-items';

describe('SubItems', () => {
  let component: SubItems;
  let fixture: ComponentFixture<SubItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
