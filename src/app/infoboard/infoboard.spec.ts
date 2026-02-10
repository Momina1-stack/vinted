import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infoboard } from './infoboard';

describe('Infoboard', () => {
  let component: Infoboard;
  let fixture: ComponentFixture<Infoboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infoboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infoboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
