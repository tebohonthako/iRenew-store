import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';


const routes: Routes = [

  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // redirect to `first-component or landing page`

  { path: 'landing', component: LandingPageComponent },

  { path: 'register', component: RegisterPageComponent},

  { path: 'login', component: LoginComponent },
  
  { path: 'billing', component: BillingPageComponent },

  { path: 'checkout', component: CheckoutPageComponent },

  
//  { path: '**', component: PageNotFoundComponent },  Wildcard route for a 404 page
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
