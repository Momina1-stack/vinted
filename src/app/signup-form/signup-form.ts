import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  imports: [FormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css',
})
export class SignupForm {
full: any;
name: any;
zipcode: any;
password: any;
email: any;
username: any;
 showPassword: boolean = false;

    togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
