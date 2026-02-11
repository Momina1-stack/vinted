import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [CommonModule, RouterLink],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {
  topics = [
    { title: 'Profile and settings', route: '/profile-settings' },
    { title: 'ID verifications', route: '/id-verfications' },
    { title: ' Banned account', route: '/banned-acc' },
    { title: 'Security and reporting', route: '/reporting' },
    { title: 'Data Privacy ', route: '/data-privacy' },
    { title: 'Registration and login', route: '/registration' },
    { title: 'Referrals and donations', route: '/referrals-and-donations' },
    { title: 'Terms and policies', route: '/policies' },

  ];
}
