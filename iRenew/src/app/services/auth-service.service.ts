import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
//import * from 'jwt-decode';
import * as jwt_decode  from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private statusCode:any;
  private isLoggedIn: boolean = false;
  // private loggedInUserEmail: string = '';
  // private loggedInUserName:string='';
  authChanged = new Subject<boolean>(); // Subject for notifying authentication state changes
  getIsLoggedInUser: any;

  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;

  constructor() { 
     // Initialize the subject with initial authentication status (e.g., false)
     this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
     // Expose the subject as an observable
     this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
  }
    
  private decodeToken(token: string): any {
    try {
      return jwt_decode.jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }

  getUserIdFromToken(token: string): string | null {
    const decodedToken = this.decodeToken(token);
    return decodedToken ? decodedToken.id : null;
  }


  login(token: string): void {
    this.isLoggedIn = true;
    // this.loggedInUserEmail = email;
    // this.loggedInUserName=name;
    localStorage.setItem('token', token);
    // localStorage.setItem('nameUser',name);
    this.isAuthenticatedSubject.next(true);
    this.authChanged.next(true); // Notify subscribers that authentication state has changed
  }

  logout(): void {
    this.isLoggedIn = false;
    // this.loggedInUserEmail = '';
    localStorage.removeItem('token');
    // localStorage.removeItem('nameUser');
    this.isAuthenticatedSubject.next(false);
    this.authChanged.next(false); // Notify subscribers that authentication state has changed
  }

  getIsLoggedIn(): boolean {
    if(localStorage.getItem('token')){
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

   setCode(code:any){
    this.statusCode=code;
   }
   getCode(){return this.statusCode;}
  // getLoggedInUserEmail(): string {
  //   return this.loggedInUserEmail;
  // }
  // getLoggedUserName():string{
  //   return this.loggedInUserName;
  // }

  // initAuth(): void {
  //   const userEmail = localStorage.getItem('loggedInUserEmail');
  //   const name=localStorage.getItem('nameUser');
  //   if (userEmail) {;
  //     this.login(userEmail,name!);
  //   }
  // }
}
