import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {
private modalState = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalState.asObservable();

  openModal() {
    this.modalState.next(true);
  }

  closeModal() {
    this.modalState.next(false);
  }
  private modalMenu = new BehaviorSubject<boolean>(false);
  modalMenu$ = this.modalMenu.asObservable();

  openMenu() {
    this.modalMenu.next(true);
  }

  closeMenu() {
    this.modalMenu.next(false);
  }
  
}
