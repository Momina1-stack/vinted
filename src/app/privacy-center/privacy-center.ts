import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-center',
  imports: [CommonModule],
  templateUrl: './privacy-center.html',
  styleUrl: './privacy-center.css',
})
export class PrivacyCenter {

  faqs = [
    {
      question: 'Can you delete the data collected about me?', answer: 'You can reach out to us to request the deletion of your data. We’ll remove it if it’s no longer needed, if you withdraw your consent, if there’s no valid reason to keep it for our legitimate interests, or if it was mishandled, among other legal reasons When you make a deletion request', open: false
    },
    { question: 'Can I change my username?', answer: 'Yes, you can change your username by following the steps in our Help Center.Please note that certain requirements or restrictions may apply when changing your username.', open: false },

    {
      question: 'Can you change the data you collected about me?', answer: 'You can update any outdated, inaccurate, or incomplete data in your profile settings whenever you like. We may ask to verify the changes to help keep your account secure. If you\'d like help updating your data or need anything else, just get in touch–we\'re always here for you.',
      open: false
    },

    { question: 'Can I refuse to share my data?', answer: 'In most cases, it\'s up to you what you share with us – but some information is needed to create your account, use certain Vinted features, or to comply with legal obligations. To make sure you\'re only sharing what you\'re comfortable with, you can review your data first and adjust your privacy settings as needed.', open: false },
   { 
  question: 'Who can help me with privacy questions?', 
  answer: "When you use Vinted, in most cases it's us – Vinted, UAB – who are responsible for your data. That means we're your Data Controller. We've also got a Data Protection Officer on board. If you have any questions about how we handle your data or if you'd like to exercise your privacy rights, feel free to contact us using this form or by emailing privacysupport@vinted.com. If we can't resolve your issue, you're welcome to take your complaint to the data protection authority.", 
  open: false 
}
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
