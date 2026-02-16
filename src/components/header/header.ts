import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { MyService } from '../../app/my-service';
import { ImgUpload } from "../../app/img-upload/img-upload";
import { Menu } from "../../app/menu/menu";
import { Auth } from '../../app/services/auth';
import { CardModal } from "../../app/card-modal/card-modal";
import { Catalog } from "../../app/catalog/catalog";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, ImgUpload, Menu, Catalog],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {

  // ================== Dropdown States ==================
  isCatalogOpen = false;
  selectedCatalog = 'Catalog';
  
  isLanguageOpen = false;
  isDropdownOpen = false;

  isModalOpen = false;
  eRef: any;

  // ================== Constructor ==================
  constructor(
    public auth: Auth,
    private modalService: MyService,
    private router: Router
  ) { }

  // ================== Catalog Dropdown ==================
  toggleCatalog(event: Event) {
    event.stopPropagation();
    this.isCatalogOpen = !this.isCatalogOpen;
  }

  selectCatalog(item: string) {
    this.selectedCatalog = item;
    this.isCatalogOpen = false;
  }

  openModalCatalog() {
    this.modalService.opencatalog();
  }

  // ================== Language Dropdown ==================
  toggleLanguage(event?: Event) {
    if (event) event.stopPropagation();
    this.isLanguageOpen = !this.isLanguageOpen;
  }

  // ================== Outside Click Handler ==================
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const catalogWrapper = document.querySelector('.catalog-wrapper');
    if (catalogWrapper && !catalogWrapper.contains(target)) {
      this.isCatalogOpen = false;
    }

    // Close language dropdown if open
    const languageDropdown = document.querySelector('.language-wrapper');
    if (languageDropdown && !languageDropdown.contains(target)) {
      this.isLanguageOpen = false;
    }
  }

  // ================== Mobile Menu ==================
  toggleMobileMenu() {
    this.modalService.openMenu();
  }

  // ================== Modals ==================
  openModal() {
    this.modalService.openModal();
  }

  // ================== Logout ==================
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  // ================== Generic Dropdown ==================
  toggleDropdownn() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
handleClickOutside(event: Event) {
  if (!this.eRef.nativeElement.contains(event.target)) {
    this.isDropdownOpen = false;
  }
}

}
