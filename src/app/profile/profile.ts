import { Component } from '@angular/core';
import { InfoProfilemodal } from "../info-profilemodal/info-profilemodal";
import { MyService } from '../my-service';
import { InfoProfileModal2 } from "../info-profile-modal2/info-profile-modal2";

@Component({
  selector: 'app-profile',
  imports: [InfoProfilemodal, InfoProfileModal2],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(private modalService: MyService) { }

  isModalOpen = false;



  openModalInfo() {
    this.modalService.openprofileInfo()
  }

  openModalInfo2() {
    this.modalService.openprofileInfo2()
  }


}
