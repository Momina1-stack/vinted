import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddresModal } from './add-addres-modal';

describe('AddAddresModal', () => {
  let component: AddAddresModal;
  let fixture: ComponentFixture<AddAddresModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAddresModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAddresModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
