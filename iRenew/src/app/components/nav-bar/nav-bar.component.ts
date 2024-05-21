import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isLoggedIn: boolean = false; // Set this to true if user is logged in, false otherwise

  constructor(private router: Router) {
    // Check if the user is logged in when the component initializes (you need to implement this logic)
    this.checkLoggedInStatus();
  }

  checkLoggedInStatus() {
    // Implement logic to check if the user is logged in
    // For example, you might check if there's a token in local storage or if there's a session
    // Update isLoggedIn based on the result
    // For demonstration purposes, I'm just setting it to true if there's a token in local storage
    const token = localStorage.getItem('user');
    //this.isLoggedIn = !!token; 
    if(token==null){
      this.isLoggedIn=false;
      // !! converts truthy/falsy values to true/false
  }else{
    this.isLoggedIn=true;
  }

}
logOut(){
  localStorage.removeItem("user");
  this.isLoggedIn = false;
  this.router.navigate(["/login"]);
  console.log(this.isLoggedIn)
}
}



