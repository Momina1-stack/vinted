import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProfilemodal } from './info-profilemodal';

describe('InfoProfilemodal', () => {
  let component: InfoProfilemodal;
  let fixture: ComponentFixture<InfoProfilemodal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProfilemodal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProfilemodal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
