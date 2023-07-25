import { Injectable } from '@angular/core';
import { LogInService } from '../services/log-in.service';
import { LoginModel, LoginModelSend } from '../../data/models/log-in-model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationLoginUseCase {
  constructor(private logInService: LogInService) {}

  execute(data: LoginModelSend): Promise<LoginModel | undefined> {
    const response = lastValueFrom(this.logInService.authenticationPost(data));

    return response;
  }
}
