import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BillingPageComponent } from './components/pages/billing-page/billing-page.component';

import { LoginComponent } from './components/pages/login/login.component';


import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent ,   
    BillingPageComponent, 
    RegisterPageComponent,  
    LandingPageComponent  

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
