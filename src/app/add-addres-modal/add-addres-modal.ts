import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService } from '../my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-addres-modal',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-addres-modal.html',
  styleUrl: './add-addres-modal.css',
})
export class AddAddresModal {
    formData = {
    fullName: '',
    country: 'United States',
    addressLine1: '',
    addressLine2: '',
    zipCode: ''
  };

  isModalOpen = false;

  constructor(private modalService: MyService) {
    this.modalService.addAddressModal$.subscribe(val => {
      this.isModalOpen = val;
    });
  }

  closeAddAddress() {
    this.modalService.closeAddAddress();
  }

}
