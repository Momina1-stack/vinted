import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-profilemodal',
  imports: [CommonModule],
  templateUrl: './info-profilemodal.html',
  styleUrl: './info-profilemodal.css',
})
export class InfoProfilemodal {

  isModalOpen = false;

  constructor(private modalService: MyService) {
    this.modalService.modalprofileInfo$.subscribe(val => {
      this.isModalOpen = val;
    });
  }

  closeModal() {
    this.modalService.closeprofileInfo();
  }
}


