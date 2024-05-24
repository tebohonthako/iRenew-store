import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private loggedInUserEmail: string = '';
  private loggedInUserName:string='';
  authChanged = new Subject<boolean>(); // Subject for notifying authentication state changes

  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;


  constructor() { 
     // Initialize the subject with initial authentication status (e.g., false)
     this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
     // Expose the subject as an observable
     this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
  }

  login(email: string,name: string): void {
    this.isLoggedIn = true;
    this.loggedInUserEmail = email;
    this.loggedInUserName=name;
    localStorage.setItem('loggedInUserEmail', email);
    localStorage.setItem('nameUser',name);
    this.isAuthenticatedSubject.next(true);
    this.authChanged.next(true); // Notify subscribers that authentication state has changed
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedInUserEmail = '';
    localStorage.removeItem('loggedInUserEmail');
    localStorage.removeItem('nameUser');
    this.isAuthenticatedSubject.next(false);
    this.authChanged.next(false); // Notify subscribers that authentication state has changed
  }

  getIsLoggedIn(): boolean {
    if(localStorage.getItem('loggedInUserEmail')){
      this.isLoggedIn = true;
    }
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
