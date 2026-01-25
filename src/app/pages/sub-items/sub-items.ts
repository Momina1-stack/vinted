import { Component } from '@angular/core';
import { MyService } from '../../my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sub-items',
  imports: [CommonModule],
  templateUrl: './sub-items.html',
  styleUrl: './sub-items.css',
})
export class SubItems {
  isOpen: false | undefined;
  constructor(private modalService: MyService) { }

  toggleBagItems() {
    this.modalService.BagItems();
  }

  openModal() {
    this.modalService.openModal();

  }





}
