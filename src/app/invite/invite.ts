import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MyService } from '../my-service';
import { ReferralsWork } from "../referrals-work/referrals-work";

@Component({
  selector: 'app-invite',
  imports: [RouterLink, ReferralsWork],
  templateUrl: './invite.html',
  styleUrl: './invite.css',
})
export class Invite {


   constructor(private modalService: MyService) { }
  
    isModalOpen = false;

    openReferrals() {
      this.modalService.openReferrals()
    }
  
  

}
