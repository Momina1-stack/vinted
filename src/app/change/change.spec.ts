import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Change } from './change';

describe('Change', () => {
  let component: Change;
  let fixture: ComponentFixture<Change>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Change]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Change);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
