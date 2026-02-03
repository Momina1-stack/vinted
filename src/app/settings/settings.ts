import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  

} 