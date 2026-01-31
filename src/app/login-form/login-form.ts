import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

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



  constructor(private auth: Auth , private router :Router) {}


      togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
  const success = this.auth.login(this.email, this.password);

  if (success) {
    this.router.navigate(['/']);
  } else {
    this.error = 'Invalid email or password';
  }
}
}
