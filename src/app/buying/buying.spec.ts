import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buying } from './buying';

describe('Buying', () => {
  let component: Buying;
  let fixture: ComponentFixture<Buying>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buying]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buying);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
