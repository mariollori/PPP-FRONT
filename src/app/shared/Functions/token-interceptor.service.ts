import { Injectable } from '@angular/core';
import { LogInService } from 'src/app/modules/auth/log-in/domain/services/log-in.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService {
  constructor(private logInService: LogInService) {}

  intercept(req: any, next: any) {
    const tokeninzeReq = req.clone({
      setHeaders: {
        'x-token': `${this.logInService.getToken()}`,
      },
    });
    console.log("Aqui toy pe mano "+this.logInService.getToken());
    return next.handle(tokeninzeReq);
  }
}
