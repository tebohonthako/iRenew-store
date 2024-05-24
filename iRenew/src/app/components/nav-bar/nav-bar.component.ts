import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandler } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { ChangeDetectorRef } from '@angular/core';





@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean = false;
  //authService: any;
  isAuthenticated: boolean=false;
  testVal: string=''
  testFunc(){
    this.testVal='test';
  }

  constructor(private router: Router,private authService: AuthService,private cd: ChangeDetectorRef) {
    //this.checkLoggedInStatus();
  }
  
  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      // Update the local isAuthenticated property whenever the authentication status changes
      this.isAuthenticated = isAuthenticated;
      console.log('status changed');
      this.testVal='Hey';
      this.cd.detectChanges(); //updates the navbar to reflect the changes
      
    });
    //console.log('this is the navbar ngOnInit()');
 
  }
 
  // Check the user's login status
  // checkLoggedInStatus() {
  //   const token = localStorage.getItem('user');
  //   this.isLoggedIn =!!token; // Convert truthy/falsy to boolean
  // }

  // Log out the user
  logOut() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    console.log('User logged out:', this.isLoggedIn);
  }
  
 
  logIn(username: string, password: string) {
    // Prompt the user for their credentials
    // const username = prompt('Enter your username');
    // const password = prompt('Enter your password');

    // // Use the AuthService to authenticate the user
    // this.authService.login(username, password).subscribe(
    //   (response: { success: boolean, message: string }) => {
    //     // If the login is successful, update the isLoggedIn variable and navigate to the home page
    //     this.isLoggedIn = true;
    //     this.router.navigate(['/landing']);
    //   },
    //   (error: Error) => {
    //     // If the login fails, display an error message
    //     alert('Invalid username or password');
    //   }
    // );
  }
}