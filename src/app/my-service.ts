import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  referrals: any;
  Referrals: any;
  openInfo2() {
    throw new Error('Method not implemented.');
  }
  BagItems() {
    throw new Error('Method not implemented.');
  }
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

  private modalItems = new BehaviorSubject<boolean>(false);
  modalItems$ = this.modalItems.asObservable();

  openItems() {
    this.modalItems.next(true);
  }

  closeItems() {
    this.modalItems.next(false);
  }

   private modalInfo = new BehaviorSubject<boolean>(false);
  modalInfo$ = this.modalInfo.asObservable();

  openInfo() {
    this.modalInfo.next(true);
  }

  closeInfo() {
    this.modalInfo.next(false);
  }

   private modalprofileInfo = new BehaviorSubject<boolean>(false);
  modalprofileInfo$ = this.modalprofileInfo.asObservable();

  openprofileInfo() {
    this.modalprofileInfo.next(true);
  }

  closeprofileInfo() {
    this.modalprofileInfo.next(false);
  }

   private modalprofileInfo2 = new BehaviorSubject<boolean>(false);
  modalprofileInfo2$ = this.modalprofileInfo2.asObservable();

  openprofileInfo2() {
    this.modalprofileInfo2.next(true);
  }

  closeprofileInfo2() {
    this.modalprofileInfo2.next(false);
  }

  private modalReferrals = new BehaviorSubject<boolean>(false);
  modalReferrals$ = this.modalReferrals.asObservable();

  openReferrals() {
    this.modalReferrals.next(true);
  }

  closeReferrals() {
    this.modalReferrals.next(false);
  }


  
  
}
