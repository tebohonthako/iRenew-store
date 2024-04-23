import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BillingPageComponent    // importing our NavBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
