import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';


const routes: Routes = [

  { path: 'register', component: RegisterPageComponent},
  
  { path: 'billing', component: BillingPageComponent },
  
  { path: '', redirectTo: '/register', pathMatch: 'full' } // redirect to `first-component`
  
 // { path: '**', component: PageNotFoundComponent },  Wildcard route for a 404 page
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
