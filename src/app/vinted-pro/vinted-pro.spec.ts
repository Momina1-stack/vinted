import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VintedPro } from './vinted-pro';

describe('VintedPro', () => {
  let component: VintedPro;
  let fixture: ComponentFixture<VintedPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VintedPro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VintedPro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
