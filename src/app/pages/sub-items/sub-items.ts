import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService } from '../../my-service';

@Component({
  selector: 'app-sub-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-items.html',
  styleUrl: './sub-items.css',
})
export class SubItems {

  isModalOpen = true;
    closeModal() {
    this.isModalOpen = false;
  }
  
  constructor(private modalService: MyService) {
    this.modalService.modalItems$.subscribe(val => {
      this.isModalOpen = val;
    });
    
  }

  @ViewChild('slider') slider!: ElementRef;

  currentIndex = 0;
  totalSlides = 3;

  next() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.currentIndex++;
      this.scroll();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scroll();
    }
  }

  scroll() {
    const width = this.slider.nativeElement.clientWidth;
    this.slider.nativeElement.scrollTo({
      left: width * this.currentIndex,
      behavior: 'smooth',
    });
  }
}
