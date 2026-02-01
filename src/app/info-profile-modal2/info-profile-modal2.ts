import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-profile-modal2',
  imports: [CommonModule],
  templateUrl: './info-profile-modal2.html',
  styleUrl: './info-profile-modal2.css',
})
export class InfoProfileModal2 {
  
  isModalOpen = false;

  constructor(private modalService: MyService) {
    this.modalService.modalprofileInfo2$.subscribe(val => {
      this.isModalOpen = val;
    });
  }

  closeModal() {
    this.modalService.closeprofileInfo();
  }
}
