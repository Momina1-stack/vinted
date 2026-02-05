import { Component } from '@angular/core';

@Component({
  selector: 'app-bundle-discounts',
  imports: [],
  templateUrl: './bundle-discounts.html',
  styleUrl: './bundle-discounts.css',
})
export class BundleDiscounts {

  isEnabled = false;
  
  bundleDiscounts = [
    { items: 2, discount: 5, isExpanded: false, showDropdown: false },
    { items: 3, discount: 10, isExpanded: false, showDropdown: false },
    { items: 5, discount: 20, isExpanded: false, showDropdown: false }
  ];

  // Dropdown options
  discountOptions = [5, 10, 15, 20, 25, 30,40,50];

  toggleDiscount(): void {
    this.isEnabled = !this.isEnabled;
    
    if (!this.isEnabled) {
      this.bundleDiscounts.forEach(bundle => {
        bundle.isExpanded = false;
        bundle.showDropdown = false;
      });
    }
  }

  toggleRow(bundle: any): void {
    bundle.isExpanded = !bundle.isExpanded;
  }

  toggleDiscountDropdown(bundle: any): void {
    // Close all other dropdowns
    this.bundleDiscounts.forEach(b => {
      if (b !== bundle) {
        b.showDropdown = false;
      }
    });
    
    // Toggle current dropdown
    bundle.showDropdown = !bundle.showDropdown;
  }

  selectDiscount(bundle: any, percentage: number): void {
    bundle.discount = percentage;
    bundle.showDropdown = false;
    console.log(`Updated discount for ${bundle.items} items to ${percentage}%`);
  }
}



