import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-press',
  imports: [RouterLink, RouterOutlet,CommonModule],
  templateUrl: './press.html',
  styleUrl: './press.css',
})
export class Press {

  isMenuOpen = false;
}
