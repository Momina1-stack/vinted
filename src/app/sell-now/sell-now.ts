import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sell-now',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sell-now.html',
})
export class SellNow {

  isDropdownOpen = false;
  selectedCategory: string = '';
  searchText: string = '';

  categories = [
    { name: 'Women', icon: 'icon.png' },
    { name: 'Men', icon: 'men-icon.png' },
    { name: 'Kids', icon: 'kids-icon.png' },
    { name: 'Home', icon: 'home-icon.png' },
    { name: 'Electronics', icon: 'electronics.png' },
    { name: 'Entertainment', icon: 'entertainment-icon.png' },
    { name: 'Hobbies & Collectibles', icon: 'hobbies-icon.png' },
    { name: 'Sports', icon: 'sports-icon.png' },
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCategory(item: any) {
    this.selectedCategory = item.name;
    this.isDropdownOpen = false;
    this.searchText = '';
  }

  filteredCategories() {
    return this.categories.filter(cat =>
      cat.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  imagePreviews: string[] = [];

  onFileSelected(event: any) {
    const files = event.target.files;

    if (files) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }
}
