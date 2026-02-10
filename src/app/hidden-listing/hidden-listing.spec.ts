import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenListing } from './hidden-listing';

describe('HiddenListing', () => {
  let component: HiddenListing;
  let fixture: ComponentFixture<HiddenListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
