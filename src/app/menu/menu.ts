import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
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
  closeMenu() {
  this.isMobileMenuOpen = false;
}

isMenuOpen = false;

closeMenuu() {
  this.isMenuOpen = false;
}
}
