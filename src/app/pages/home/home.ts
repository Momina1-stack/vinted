import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   isPreviewOpen = false;
  selectedImage = '';

  images = [
    '',
    'assets/bag-2.jpg',
    'assets/bag-3.jpg',
    'assets/bag-4.jpg',
    'assets/bag-5.jpg',
  ];

  openPreview(img: string) {
    this.selectedImage = img;
    this.isPreviewOpen = true;
  }

  closePreview() {
    this.isPreviewOpen = false;
    this.selectedImage = '';
  }

}
