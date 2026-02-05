import { Component } from '@angular/core';
import { MyService } from '../my-service';

@Component({
  selector: 'app-logout-modal',
  imports: [],
  templateUrl: './logout-modal.html',
  styleUrl: './logout-modal.css',
})
export class LogoutModal {
  isModalOpen = false;
  
    constructor(private modalService: MyService) {
      this.modalService.logoutModal$.subscribe(val => {
        this.isModalOpen = val;
      });
    }
  
    closelogout() {
      this.modalService.closelogout();
    }
  

}
