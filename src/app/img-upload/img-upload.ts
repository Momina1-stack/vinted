import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-upload',
  imports: [CommonModule],
  templateUrl: './img-upload.html',
  styleUrl: './img-upload.css',
})
export class ImgUpload {
  isOpen = false;
  previewImage: string | ArrayBuffer | null = null;

  constructor(private modalService: MyService) {
    this.modalService.modalState$.subscribe(state => {
      this.isOpen = state;
    });
  }
onImageSelect(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  close() {
    this.modalService.closeItems();
  }
}
