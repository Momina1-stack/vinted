import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { BankDetailModal } from "../bank-detail-modal/bank-detail-modal";

@Component({
  selector: 'app-bank-detail',
  imports: [BankDetailModal],
  templateUrl: './bank-detail.html',
  styleUrl: './bank-detail.css',
})
export class BankDetail {
   constructor(private modalService: MyService) { }
    
      isModalOpen = false;
  
      openModalBank() {
        this.modalService.openBank()
      }
    

}
