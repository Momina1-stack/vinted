import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MyService } from '../../app/my-service';
import { ImgUpload } from "../../app/img-upload/img-upload";
import { Menu } from "../../app/menu/menu";
import { Auth } from '../../app/services/auth';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, ImgUpload, Menu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
toggleDropdown() {
throw new Error('Method not implemented.');
}
  Service: any;
  router: any;
  // authService: any;

  constructor(
    public auth: Auth,
    private modalService: MyService
  ) { }
 

  logout() {
    this.auth.logout();
  }

  isCatalogOpen = false;
  isLanguageOpen = false;
  isOpen = false;


  toggleCatalog() {
    this.isCatalogOpen = !this.isCatalogOpen;
  }

  toggleLanguage() {
    console.log("clicked", this.isLanguageOpen)

    this.isLanguageOpen = !this.isLanguageOpen;
  }

  toggleMobileMenu() {
    this.modalService.openMenu();
  }

  openModal() {
    this.modalService.openModal();

  }

  logoutt() {
  this.auth.logout();
  this.router.navigate(['/login']);
}
}