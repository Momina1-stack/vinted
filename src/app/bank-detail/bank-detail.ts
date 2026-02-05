import { Component, HostListener } from '@angular/core';
import { MyService } from '../my-service';
import { BankDetailModal } from "../bank-detail-modal/bank-detail-modal";
import { AddAddresModal } from "../add-addres-modal/add-addres-modal";
import { CheckingModal } from "../checking-modal/checking-modal";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-detail',
  imports: [BankDetailModal, AddAddresModal, CheckingModal,CommonModule],
  templateUrl: './bank-detail.html',
  styleUrl: './bank-detail.css',
})
export class BankDetail {
   constructor(private modalService: MyService) { }
    
      isModalOpen = false;
  
      openModalBank() {
        this.modalService.openBank()
      }
    
        openAddAddressModal() {
          this.modalService.openAddAddress()
        }
        openChecking() {
          this.modalService.openChecking()
        }
         selectedAccount: string = 'Checking';
  isDropdownOpen: boolean = false;
  // isModalOpen: boolean = false;
  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // 768px = md breakpoint
  }

  handleClick() {
    if (this.isMobile) {
      this.isModalOpen = true;
    } else {
      this.toggleDropdown();
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  selectAccount(account: string) {
    this.selectedAccount = account;
    if (this.isMobile) {
      // Mobile par save button click karne par close hoga
    } else {
      this.closeDropdown();
    }
  }

  saveSelection() {
    this.closeModal();
    console.log('Selected account:', this.selectedAccount);
  }
        

}
