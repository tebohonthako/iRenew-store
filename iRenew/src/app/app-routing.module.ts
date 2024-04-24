import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


const routes: Routes = [
  { path: 'register', component: RegisterPageComponent},

  { path: 'register', component: RegisterPageComponent},
  
  { path: 'billing', component: BillingPageComponent },

  { path: 'landing', component: LandingPageComponent },
  
  { path: '', redirectTo: '/landing', pathMatch: 'full' } // redirect to `first-component or landing page`
  
 // { path: '**', component: PageNotFoundComponent },  Wildcard route for a 404 page
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
