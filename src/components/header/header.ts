import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  
   isLanguageDropdownOpen = false;

  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  selectLanguage(lang: string) {
    console.log('Selected language:', lang);
    this.isLanguageDropdownOpen = false;

}
}
