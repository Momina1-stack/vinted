import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-modal',
  imports: [CommonModule],
  templateUrl: './card-modal.html',
  styleUrl: './card-modal.css',
})
export class CardModal {

  isModalOpen = false;
  cardModal: any;
  
    constructor(private modalService: MyService) {
      this.modalService.cardModal$.subscribe(val => {
        this.isModalOpen = val;
      });
    }
  
  closeModal() {
  this.modalService.closecard();
}

}
