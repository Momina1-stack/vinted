import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-selling',
  imports: [CommonModule, RouterLink],
  templateUrl: './selling.html',
  styleUrl: './selling.css',
})
export class Selling {
  topics = [
    { title: 'Uploading listings', route: '/uploading-listing' },
    { title: 'Managing listings', route: '/managing-listing' },
    { title: 'Hidden & removed listings', route: '/hidden-listing' },
    { title: 'Shipping & returns', route: '/shipping-returns' },
    { title: 'Payments & withdrawals', route: '/withdrawals' },
    { title: 'Vinted Pro', route: '/vinted-pro' },
  ];
}

