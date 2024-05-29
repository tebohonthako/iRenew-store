import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandler } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
  userId:string|undefined="";
  testFunc(){
    this.testVal='test';
  }

  constructor(private router: Router,private authService: AuthService,private cd: ChangeDetectorRef) {
 
  }
  goToProds(category: String){
    this.router.navigate([`/products/${category}`]);
  }
  goToProdsAll(category: String){
    this.router.navigate([`products/${category}`]);
  }
  ngOnInit(): void {
  
    if(this.authService.getIsLoggedIn()){
      this.authService.login(localStorage.getItem("token")!);
      
    }
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      // Update the local isAuthenticated property whenever the authentication status changes
      this.isAuthenticated = isAuthenticated;
   
      this.cd.detectChanges(); //updates the navbar to reflect the changes

      
    });

 
  }
 gotoProfile(){
  this.userId= this.authService.getUserIdFromToken(localStorage.getItem('token')!)!;
        
  this.router.navigate(["/profile/"+this.userId])
 }
  
  logOut() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/landing']);
 
  }
 

}