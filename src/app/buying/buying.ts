import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buying',
  imports: [CommonModule,RouterLink],
  templateUrl: './buying.html',
  styleUrl: './buying.css',
})
export class Buying {
    topics = [
    { title: ' Finding items to buy', route: '/finding-items' },
    { title: 'Getting items verified', route: '/getting-items' },
    { title: '  Payments and refunds', route: '/refunds' },
    { title: ' Shipping and returns', route: '/returns' },
   
  ];

}
