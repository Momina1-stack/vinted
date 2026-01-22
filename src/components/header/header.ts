import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  
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
}