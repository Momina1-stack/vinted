import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { LogoutModal } from "../logout-modal/logout-modal";

@Component({
  selector: 'app-login-activity',
  imports: [LogoutModal],
  templateUrl: './login-activity.html',
  styleUrl: './login-activity.css',
})
export class LoginActivity {

    constructor(private modalService: MyService) { }
  
    isModalOpen = false;
  
  
  
    openlogout() {
      this.modalService.openlogout()
    }

}
