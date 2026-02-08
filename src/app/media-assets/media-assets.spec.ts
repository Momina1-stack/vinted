import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAssets } from './media-assets';

describe('MediaAssets', () => {
  let component: MediaAssets;
  let fixture: ComponentFixture<MediaAssets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaAssets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaAssets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
