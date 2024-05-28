import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getIsLoggedIn()) {
      return true; // Allow navigation
    } else {
      this.router.navigate(['/login']);
      return false; // Redirect to login page
    }
  }
}
