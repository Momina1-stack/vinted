import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VintedVentures } from './vinted-ventures';

describe('VintedVentures', () => {
  let component: VintedVentures;
  let fixture: ComponentFixture<VintedVentures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VintedVentures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VintedVentures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
