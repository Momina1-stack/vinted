import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-modal',
  imports: [CommonModule],
  templateUrl: './info-modal.html',
  styleUrl: './info-modal.css',
})
export class InfoModal {

  isModalOpen = false;
    closeModal() {
    this.isModalOpen = false;
  }
  
  constructor(private modalService: MyService) {
    this.modalService.modalInfo$.subscribe(val => {
      this.isModalOpen = val;
    });
    
  }
}
