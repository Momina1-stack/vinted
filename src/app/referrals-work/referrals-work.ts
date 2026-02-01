import { Component } from '@angular/core';
import { MyService } from '../my-service';
import Comment_ from 'postcss/lib/comment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-referrals-work',
  imports: [CommonModule],
  templateUrl: './referrals-work.html',
  styleUrl: './referrals-work.css',
})
export class ReferralsWork {
  isModalOpen = false;
  
    constructor(private modalService: MyService) {
      this.modalService.modalReferrals$.subscribe(val => {
        this.isModalOpen = val;
      });
    }
  
    closeModal() {
      this.modalService.closeReferrals();
    }
}
