import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [CommonModule,FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {

   countries = ['United States', 'Canada', 'United Kingdom'];
  cities: any = {
    'United States': ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham']
  };

  languages = ['English, US (English)', 'French', 'Spanish'];

  country = 'United States';
  city = '';
  showCity = true;
  language = 'English, US (English)';
}
