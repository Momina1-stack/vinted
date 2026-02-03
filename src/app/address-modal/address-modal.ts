import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address-modal',
  imports: [CommonModule],
  templateUrl: './address-modal.html',
  styleUrl: './address-modal.css',
})
export class AddressModal {
  
isModalOpen = false;

  constructor(private modalService: MyService) {
    this.modalService.addressModal$.subscribe(val => {
      this.isModalOpen = val;
    });
  }

  closeAddressModal() {
    this.modalService.closeAddress(); // correct method name
  }
}


