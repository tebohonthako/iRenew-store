import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { LoginComponent } from './pages/login/login.component';

import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ProdutsPageComponent } from './pages/produts-page/produts-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent ,   
    BillingPageComponent, 
    RegisterPageComponent,  
    LandingPageComponent, 
    CheckoutPageComponent, 
    ProdutsPageComponent, 
    ConfirmationPageComponent,
    ProfilePageComponent
    ConfirmationPageComponent,
      

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    CommonModule, RouterLink, RouterLinkActive, RouterOutlet,
    HttpClientModule
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [FormGroup],
  bootstrap: [AppComponent]
})
export class AppModule { }
