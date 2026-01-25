import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyService } from '../my-service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  isMobileMenuOpen = false;
  previewImage: string | ArrayBuffer | null = null;

  constructor(private modalService: MyService) {
    this.modalService.modalMenu$.subscribe(state => {
      this.isMobileMenuOpen = state;
    });
  }

  close() {
    this.modalService.closeModal();
  }
}
