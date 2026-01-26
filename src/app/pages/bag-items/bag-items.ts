import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SubItems } from "../sub-items/sub-items";
import { MyService } from '../../my-service';

@Component({
  selector: 'app-bag-items',
  imports: [SubItems],
  templateUrl: './bag-items.html',
  styleUrl: './bag-items.css',
})
export class BagItems {
   constructor(private modalService: MyService) {}
  
  isModalOpen = false;

  openModal() {
    this.modalService.openItems()
  }

  closeModal() {
    this.isModalOpen = false;
  }
   toggleSubItems() {
    this.modalService.openMenu();
  }
}
