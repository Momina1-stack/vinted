import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadingListing } from './uploading-listing';

describe('UploadingListing', () => {
  let component: UploadingListing;
  let fixture: ComponentFixture<UploadingListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadingListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadingListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
