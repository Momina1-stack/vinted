import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustAndSaftey } from './trust-and-saftey';

describe('TrustAndSaftey', () => {
  let component: TrustAndSaftey;
  let fixture: ComponentFixture<TrustAndSaftey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustAndSaftey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustAndSaftey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
