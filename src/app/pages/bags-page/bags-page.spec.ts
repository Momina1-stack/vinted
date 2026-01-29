import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsPage } from './bags-page';

describe('BagsPage', () => {
  let component: BagsPage;
  let fixture: ComponentFixture<BagsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
