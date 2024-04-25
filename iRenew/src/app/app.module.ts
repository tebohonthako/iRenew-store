import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
<<<<<<< HEAD
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
=======
import { LoginComponent } from './pages/login/login.component';


import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
>>>>>>> 241bfd6d1fdb869ea22d01e2c5e53f1d48513b4a


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfilePageComponent,
    LoginComponent ,   
    BillingPageComponent, 
    RegisterPageComponent,  
    LandingPageComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
