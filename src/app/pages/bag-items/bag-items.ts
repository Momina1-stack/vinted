import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SubItems } from "../sub-items/sub-items";
import { MyService } from '../../my-service';
import { InfoModal } from "../../info-modal/info-modal";

@Component({
  selector: 'app-bag-items',
  imports: [SubItems, InfoModal],
  templateUrl: './bag-items.html',
  styleUrl: './bag-items.css',
})
export class BagItems {
  constructor(private modalService: MyService) { }

  isModalOpen = false;

  openModal() {
    this.modalService.openItems()
  }

  openModalInfo() {
    this.modalService.openInfo()
  }


}
