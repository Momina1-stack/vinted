import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { MyService } from '../my-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {

    searches = [
    {
      count: 61,
      title: 'Women → Bags',
      description:
        'Women → Bags, Michael Kors, Navy, Blue, Light blue',
    },
    {
      count: 99,
      title: 'Women → Bags',
      description:
        'Women → Bags, Primark, Zara, Shein, Light blue, Blue, Navy, Turquoise, Silver',
    },
    {
      count: 99,
      title: 'Women',
      description: 'Women',
    },
    {
      count: 99,
      title: 'Women → Bags',
      description:
        'Women → Bags, River Island, Michael Kors, New with tags, New without tags...',
    },
  ];
  
  isModalOpen = false;
  catalogModal: any;
  elementRef: any;
catalogService: any;
  
    constructor(private modalService: MyService) {
      this.modalService.catalogModal$.subscribe(val => {
        this.isModalOpen = val;
      });
    }
  
  closeModal() {
  this.modalService.closecatalog();
}



}
