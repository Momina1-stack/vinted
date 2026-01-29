import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface MenuItem {
  title: string;
  icon: string;
  subItems?: string[];
}
@Component({
  selector: 'app-category-modal',
  imports: [CommonModule],
  templateUrl: './category-modal.html',
  styleUrl: './category-modal.css',
})
export class CategoryModal {
  activeView: 'main' | 'sub' = 'main';
  selectedCategory: MenuItem | null = null;

  menuItems: MenuItem[] = [
    { title: 'Women', icon: '👕', subItems: ['Dresses', 'Tops', 'Shoes'] },
    { title: 'Men', icon: '👔', subItems: ['Shirts', 'Jeans', 'Watches'] },
    { title: 'Designer', icon: '💎', subItems: ['Gucci', 'Prada', 'LV'] },
    { title: 'Kids', icon: '👶', subItems: ['Toys', 'Baby Wear'] },
    { title: 'Home', icon: '🛋️', subItems: ['Furniture', 'Decor'] },
    { title: 'Electronics', icon: '🔌', subItems: ['Phones', 'Laptops'] },
  ];

  openSubMenu(item: MenuItem) {
    if (item.subItems) {
      this.selectedCategory = item;
      this.activeView = 'sub';
    }
  }

  goBack() {
    this.activeView = 'main';
    this.selectedCategory = null;
  }
  

}
