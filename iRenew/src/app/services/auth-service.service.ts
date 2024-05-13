import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private loggedInUserEmail: string = '';
  authChanged = new Subject<boolean>(); // Subject for notifying authentication state changes

  constructor() { }

  login(email: string): void {
    this.isLoggedIn = true;
    this.loggedInUserEmail = email;
    localStorage.setItem('loggedInUserEmail', email);
  
    this.authChanged.next(true); // Notify subscribers that authentication state has changed
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedInUserEmail = '';
    localStorage.removeItem('loggedInUserEmail');
    this.authChanged.next(false); // Notify subscribers that authentication state has changed
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getLoggedInUserEmail(): string {
    return this.loggedInUserEmail;
  }

  initAuth(): void {
    const userEmail = localStorage.getItem('loggedInUserEmail');
    if (userEmail) {
      this.login(userEmail);
    }
  }
}
