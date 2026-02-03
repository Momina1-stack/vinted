import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { CardModal } from "../card-modal/card-modal";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-payments',
  imports: [CardModal, RouterLink],
  templateUrl: './payments.html',
  styleUrl: './payments.css',
})
export class Payments {

   constructor(private modalService: MyService) { }
  
    isModalOpen = false;

    openModalCard() {
  this.modalService.opencard();  
}
   

}
