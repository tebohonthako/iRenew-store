import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';

import { LoginComponent } from './pages/login/login.component';

import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ProdutsPageComponent } from './pages/produts-page/produts-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 3bf4866a6f78e18734865108a014291e0943aa4c



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
    ConfirmationPageComponent  

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule
=======
    FormsModule,
    ReactiveFormsModule
>>>>>>> 3bf4866a6f78e18734865108a014291e0943aa4c
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
