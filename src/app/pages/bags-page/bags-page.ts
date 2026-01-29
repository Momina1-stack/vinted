import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bags-page',
  imports: [CommonModule],
  templateUrl: './bags-page.html',
  styleUrl: './bags-page.css',
})
export class BagsPage {
onSelectChange($event: Event) {
throw new Error('Method not implemented.');
}
 // Isse track karenge ke kaunsa dropdown open hai
  activeMenu: string | null = null;

  toggleMenu(menuName: string) {
    if (this.activeMenu === menuName) {
      this.activeMenu = null;
    } else {
      this.activeMenu = menuName; 
    }
  }

 
  closeMenu() {
    this.activeMenu = null;
  }
  


}
