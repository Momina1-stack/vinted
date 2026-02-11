import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-help-center',
  standalone:true,
  imports: [RouterOutlet, CommonModule, RouterLinkWithHref],
  templateUrl: './help-center.html',
  styleUrl: './help-center.css',
})
export class HelpCenter {
    isSellingOpen = false;


  toggleSelling() {
    this.isSellingOpen = !this.isSellingOpen;
  }

   isBuyingOpen = false;

  toggleBuying() {
    this.isBuyingOpen = !this.isBuyingOpen;
  }
  
   isAccountOpen = false;

  toggleAccount() {
    this.isAccountOpen = !this.isAccountOpen;
  }
}
