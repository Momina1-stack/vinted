import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MyService } from '../../app/my-service';
import { ImgUpload } from "../../app/img-upload/img-upload";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, ImgUpload],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
      constructor(private modalService: MyService) {}

  
  isCatalogOpen = false;
  isLanguageOpen = false;
  isMobileMenuOpen = false;

  toggleCatalog() {
    this.isCatalogOpen = !this.isCatalogOpen;
  }

  toggleLanguage() {
    this.isLanguageOpen = !this.isLanguageOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  openModal() {
    this.modalService.openModal();
  }
}