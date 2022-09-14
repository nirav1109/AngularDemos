import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReverseAuthGuard implements CanActivate {
  constructor(private authServices: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authServices.loggedIn()) {
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      return true;
    }
    
  }
  }
  

