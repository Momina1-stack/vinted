import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-privacy-settings',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './privacy-settings.html',
  styleUrl: './privacy-settings.css',
})
export class PrivacySettings {
 settings = {
    marketing: false,
    notifyFavorite: false,
    thirdParty: true,
    personalizeFeed: true,
    recentlyViewed: true,
  };
}