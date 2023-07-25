import { Observable } from 'rxjs';
import { LoginModel, LoginModelSend } from '../models/log-in-model';

export abstract class LogInRepository {
  abstract authenticationPost(data: LoginModelSend): Observable<LoginModel>;
}
