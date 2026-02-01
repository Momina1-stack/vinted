import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProfileModal2 } from './info-profile-modal2';

describe('InfoProfileModal2', () => {
  let component: InfoProfileModal2;
  let fixture: ComponentFixture<InfoProfileModal2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProfileModal2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProfileModal2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
