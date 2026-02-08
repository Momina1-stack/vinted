import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  openCatalog() {
    throw new Error('Method not implemented.');
  }
  closeCatalog() {
    throw new Error('Method not implemented.');
  }

  addchecking: any;
  addChecking: any;
  closeAddAddressModal() {
    throw new Error('Method not implemented.');
  }
  openAddAddressModal$() {
    throw new Error('Method not implemented.');
  }
  openCard() {
    throw new Error('Method not implemented.');
  }
  bankModal$Modal$: any;
  openDetail() {
    throw new Error('Method not implemented.');
  }
  openBankk() {
    throw new Error('Method not implemented.');
  }
  openBankdetail() {
    throw new Error('Method not implemented.');
  }
  closeCard() {
    throw new Error('Method not implemented.');
  }
  closeAddressModal() {
    throw new Error('Method not implemented.');
  }
  openAddressModal() {
    throw new Error('Method not implemented.');
  }
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

  private addressModal = new BehaviorSubject<boolean>(false);
  addressModal$ = this.addressModal.asObservable();

  openAddress() {
    this.addressModal.next(true);
  }

  closeAddress() {
    this.addressModal.next(false);
  }

  private cardModal = new BehaviorSubject<boolean>(false);
  cardModal$ = this.cardModal.asObservable();

  opencard() {
    this.cardModal.next(true);
  }

  closecard() {
    this.cardModal.next(false);
  }


  private bankModal = new BehaviorSubject<boolean>(false);
  bankModal$ = this.bankModal.asObservable();

  openBank() {
    this.bankModal.next(true);
  }

  closeBank() {
    this.bankModal.next(false);
  }

  private addAddressModal = new BehaviorSubject<boolean>(false);
  addAddressModal$ = this.addAddressModal.asObservable();

  openAddAddress() {
    this.addAddressModal.next(true);
  }

  closeAddAddress() {
    this.addAddressModal.next(false);
  }

  private checkingModal = new BehaviorSubject<boolean>(false);
checkingModal$ = this.checkingModal.asObservable();

openChecking() {
  this.checkingModal.next(true);
}

closeChecking() {
  this.checkingModal.next(false);
}

  private logoutModal = new BehaviorSubject<boolean>(false);
logoutModal$ = this.logoutModal.asObservable();

openlogout() {
  this.logoutModal.next(true);
}

closelogout() {
  this.logoutModal.next(false);
}


 private catalogModal = new BehaviorSubject<boolean>(false);
catalogModal$ = this.catalogModal.asObservable();

opencatalog() {
  this.catalogModal.next(true);
}

closecatalog() {
  this.catalogModal.next(false);
}



}
