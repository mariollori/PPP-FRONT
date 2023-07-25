import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogInService } from 'src/app/modules/auth/log-in/domain/services/log-in.service';

@Injectable({
  providedIn: 'root',
})
export class authenticationGuard implements CanActivate {
  constructor(private loginService: LogInService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.loggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
