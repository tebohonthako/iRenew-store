import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private loggedInUserEmail: string = '';
  private loggedInUserName:string='';
  authChanged = new Subject<boolean>(); // Subject for notifying authentication state changes

  constructor() { }

  login(email: string,name: string): void {
    this.isLoggedIn = true;
    this.loggedInUserEmail = email;
    this.loggedInUserName=name;
    localStorage.setItem('loggedInUserEmail', email);
    localStorage.setItem('nameUser',name);
  
    this.authChanged.next(true); // Notify subscribers that authentication state has changed
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedInUserEmail = '';
    localStorage.removeItem('loggedInUserEmail');
    localStorage.removeItem('nameUser');
    this.authChanged.next(false); // Notify subscribers that authentication state has changed
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getLoggedInUserEmail(): string {
    return this.loggedInUserEmail;
  }
  getLoggedUserName():string{
    return this.loggedInUserName;
  }

  initAuth(): void {
    const userEmail = localStorage.getItem('loggedInUserEmail');
    const name=localStorage.getItem('nameUser');
    if (userEmail) {;
      this.login(userEmail,name!);
    }
  }
}
