import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingListing } from './managing-listing';

describe('ManagingListing', () => {
  let component: ManagingListing;
  let fixture: ComponentFixture<ManagingListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagingListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagingListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
