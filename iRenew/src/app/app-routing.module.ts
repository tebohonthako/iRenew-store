import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { BillingPageComponent } from './components/pages/billing-page/billing-page.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { LoginComponent } from './components/pages/login/login.component';


const routes: Routes = [

  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // redirect to `first-component or landing page`

  { path: 'landing', component: LandingPageComponent },

  { path: 'register', component: RegisterPageComponent},

  { path: 'login', component: LoginComponent },
  
  { path: 'billing', component: BillingPageComponent },
  
//  { path: '**', component: PageNotFoundComponent },  Wildcard route for a 404 page
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
