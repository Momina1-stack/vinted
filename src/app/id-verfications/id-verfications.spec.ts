import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdVerfications } from './id-verfications';

describe('IdVerfications', () => {
  let component: IdVerfications;
  let fixture: ComponentFixture<IdVerfications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdVerfications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdVerfications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
