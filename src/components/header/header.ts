import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";
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
  styleUrl: './header.css',
})
export class Header {

isCatalogOpen = false;
selectedCatalog = 'Catalog';

toggleCatalog(event: Event) {
  event.stopPropagation(); // prevent closing immediately
  this.isCatalogOpen = !this.isCatalogOpen;
}

selectCatalog(item: string) {
  this.selectedCatalog = item; // update button text
  this.isCatalogOpen = false;  // close dropdown
}





  @HostListener('document:click')
  closeOnOutsideClick() {
    if (this.isCatalogOpen) {
      this.isCatalogOpen = false;
    }
  }
toggleDropdown() {
throw new Error('Method not implemented.');
}
  Service: any;
  router: any;


  constructor(
    public auth: Auth,
    private modalService: MyService
  ) { }
 

  logout() {
    this.auth.logout();
  }


  isOpen = false;
isLanguageOpen = false;

toggleLanguage(event?: Event) {
  if (event) event.stopPropagation(); 
  this.isLanguageOpen = !this.isLanguageOpen;
}

@HostListener('document:click')
closeLanguageDropdown() {
  if (this.isLanguageOpen) {
    this.isLanguageOpen = false;
  }
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
isDropdownOpen = false;

toggleDropdownn() {
  this.isDropdownOpen = !this.isDropdownOpen;
}


    
      isModalOpen = false;
  
      openModalCatalog() {
        this.modalService.opencatalog()
      }




}