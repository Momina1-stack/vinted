import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-help-center',
  imports: [RouterOutlet, CommonModule, RouterLinkWithHref],
  templateUrl: './help-center.html',
  styleUrl: './help-center.css',
})
export class HelpCenter {
    isSellingOpen = false;

  toggleSelling() {
    this.isSellingOpen = !this.isSellingOpen;
  }

}
