import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddressModal } from "../address-modal/address-modal";
import { MyService } from '../my-service';

@Component({
  selector: 'app-shipping',
  standalone: true,  
  imports: [CommonModule,AddressModal],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css',
})
export class Shipping {
    open = false;

  constructor(private modalService: MyService) {}

  toggle() {
    this.open = !this.open;
  }

  openAddressModal() {
    this.modalService.openAddress(); // ✅ call service method
  }
}
