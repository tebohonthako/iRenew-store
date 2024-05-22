import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProdutsPageComponent } from './pages/produts-page/produts-page.component';
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [

  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'register', component: RegisterPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'billing', component: BillingPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'profile', component: ProfilePageComponent},
  { path: 'profile/:id', component: ProfilePageComponent },
  { path: 'products', component: ProdutsPageComponent },
  { path: 'products/:id', component: ProdutsPageComponent },
  { path: 'category/:category', component: CategoryComponent},
  { path: 'confirmation', component: ConfirmationPageComponent },
  { path: 'cart', component: CartPageComponent },
  {path: 'product-details',component:ProductDetailsComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
