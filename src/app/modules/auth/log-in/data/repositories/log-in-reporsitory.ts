import { Observable } from 'rxjs';
import { LoginModel, LoginModelSend } from '../models/log-in-model';
import { UserModel } from '../models/user-model';

export abstract class LogInRepository {
  abstract authenticationPost(data: LoginModelSend): Observable<LoginModel>;
  abstract getUserByIdGet(id: string): Observable<UserModel>;
}
