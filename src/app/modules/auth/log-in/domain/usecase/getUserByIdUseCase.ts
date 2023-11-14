import { Injectable } from '@angular/core';
import { LogInService } from '../services/log-in.service';
import { lastValueFrom } from 'rxjs';
import { UserModel } from '../../data/models/user-model';

@Injectable({
  providedIn: 'root',
})
export class GetAllUserByIdUseCase {
  constructor(private logInService: LogInService) {}

  execute(id: string): Promise<UserModel | undefined> {
    const response = lastValueFrom(this.logInService.getUserByIdGet(id));

    return response;
  }
}
