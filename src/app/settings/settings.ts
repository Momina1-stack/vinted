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
countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'India'];
  selectedCountry: string = 'United States';

   dropdownOpen = false;
  selectedCity: string | null = null;
  cities: string[] = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
  ];
showCity: any;
window: any;

  selectCity(city: string) {
    this.selectedCity = city;
    this.dropdownOpen = false;
  }

 languages = [
    { code: 'en', name: 'English, US (English)' },
    { code: 'es', name: 'Español, US (Spanish)' }
  ];

  selectedLanguage = this.languages[0];
  dropdownOpenn = false;

  selectLanguage(lang: any) {
    this.selectedLanguage = lang;
    this.dropdownOpen = false;
  }



  photoUrl: string | ArrayBuffer | null = null;

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) return;

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    this.photoUrl = reader.result; // Display uploaded photo
  };

  reader.readAsDataURL(file);
}


} 