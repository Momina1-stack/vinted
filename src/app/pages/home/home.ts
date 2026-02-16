import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public auth: Auth,) { }

 

cards = [
  { img: 'bag1.webp', title: 'Bag 1', price: 'Rs 2,500' },
  { img: 'bag2.webp', title: 'Bag 2', price: 'Rs 3,200' },
  { img: 'bag3.webp', title: 'Bag 3', price: 'Rs 4,100' },
  { img: 'bag4.webp', title: 'Bag 4', price: 'Rs 2,800' },
  { img: 'bag5.webp', title: 'Bag 5', price: 'Rs 3,900' },
  { img: 'bag6.webp', title: 'Bag 6', price: 'Rs 2,100' },
  { img: 'bag7.webp', title: 'Bag 7', price: 'Rs 3,400' },
  { img: 'bag8.webp', title: 'Bag 8', price: 'Rs 4,500' },
  { img: 'bag9.webp', title: 'Bag 9', price: 'Rs 2,700' },
  { img: 'bag10.webp', title: 'Bag 10', price: 'Rs 3,800' },
  { img: 'bag11.webp', title: 'Bag 11', price: 'Rs 2,600' },
  { img: 'bag12.webp', title: 'Bag 12', price: 'Rs 4,200' },
  { img: 'bag13.webp', title: 'Bag 13', price: 'Rs 3,000' },
  { img: 'bag14.webp', title: 'Bag 14', price: 'Rs 2,900' },
  { img: 'bag15.webp', title: 'Bag 15', price: 'Rs 4,000' },
  { img: 'bag16.webp', title: 'Bag 16', price: 'Rs 3,100' },
  { img: 'bag17.webp', title: 'Bag 17', price: 'Rs 2,400' },
  { img: 'bag18.webp', title: 'Bag 18', price: 'Rs 3,600' },
  { img: 'bag19.webp', title: 'Bag 19', price: 'Rs 4,300' },
  { img: 'bag20.webp', title: 'Bag 20', price: 'Rs 2,750' },
];

}

