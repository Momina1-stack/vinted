import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checking-modal',
  imports: [CommonModule],
  templateUrl: './checking-modal.html',
  styleUrl: './checking-modal.css',
})
export class CheckingModal {

   selectedAccount: 'checking' | 'savings' = 'checking';

  selectAccountType(type: 'checking' | 'savings') {
    this.selectedAccount = type;
  }

  onSave() {
    console.log('Selected account:', this.selectedAccount);

  }
  isModalOpen = false;

  constructor(private modalService: MyService) {
    this.modalService.checkingModal$.subscribe((val: boolean) => {
      this.isModalOpen = val;
    });
  }

  closeChecking() {
    this.modalService.closeChecking();
  }

}




