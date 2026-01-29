import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {

  email: string = '';
  password: string = '';
  error: string = '';
 showPassword: boolean = false;

    togglePassword() {
    this.showPassword = !this.showPassword;
  }


  constructor(private auth: Auth) {}

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    const success = this.auth.login(this.email, this.password);

    if (!success) {
      this.error = 'Invalid email or password';
    } else {
      this.error = '';
      alert('Login successful ✅');
    }
  }


}
