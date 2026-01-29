import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  isLoggedIn = false;

  private dummyEmail = 'admin@gmail.com';
  private dummyPassword = 'admin123';

  login(email: string, password: string): boolean {
    if (email === this.dummyEmail && password === this.dummyPassword) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
  }
  
}
