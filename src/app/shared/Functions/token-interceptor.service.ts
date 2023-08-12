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
        // 'x-token': `${this.logInService.getToken()}`,
        'x-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzU0ZWIwOTYtYTA1Zi00MTc4LWExNjUtMWY4MGE2YWFkZTBkIiwiaWF0IjoxNjkxNjk0ODIzLCJleHAiOjE2OTE3ODEyMjN9.DBb_Pc9umXYCP3EUtuwc4vsU2RCEiOIvDux6tZzXAAw`,
      },
    });

    return next.handle(tokeninzeReq);
  }
}
