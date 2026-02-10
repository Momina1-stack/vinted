import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpHome } from './help-home';

describe('HelpHome', () => {
  let component: HelpHome;
  let fixture: ComponentFixture<HelpHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
