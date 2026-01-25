import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSubsection } from './about-subsection';

describe('AboutSubsection', () => {
  let component: AboutSubsection;
  let fixture: ComponentFixture<AboutSubsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSubsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSubsection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
