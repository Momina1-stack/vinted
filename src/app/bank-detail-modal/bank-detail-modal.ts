import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-detail-modal',
  imports: [CommonModule],
  templateUrl: './bank-detail-modal.html',
  styleUrl: './bank-detail-modal.css',
})
export class BankDetailModal {
    isModalOpen = false;
    
      constructor(private modalService: MyService) {
        this.modalService.bankModal$.subscribe(val => {
          this.isModalOpen = val;
        });
      }
    
     closeModal() {
  this.modalService.closeBank();   // service ke through close karo
}
  

}
