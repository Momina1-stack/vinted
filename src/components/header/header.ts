import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MyService } from '../../app/my-service';
import { ImgUpload } from "../../app/img-upload/img-upload";
import { Menu } from "../../app/menu/menu";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, ImgUpload, Menu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
      constructor(private modalService: MyService) {}

  
  isCatalogOpen = false;
  isLanguageOpen = false;
  isOpen = false;


  toggleCatalog() {
    this.isCatalogOpen = !this.isCatalogOpen;
  }

  toggleLanguage() {
    console.log("clicked",this.isLanguageOpen)

    this.isLanguageOpen = !this.isLanguageOpen;
  }

  toggleMobileMenu() {
    this.modalService.openMenu();
  }

  openModal() {
    this.modalService.openModal();
    
  }
}