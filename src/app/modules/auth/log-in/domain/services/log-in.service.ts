import { Injectable } from '@angular/core';
import { LogInRepository } from '../../data/repositories/log-in-reporsitory';
import { Observable } from 'rxjs';
import { LoginModel, LoginModelSend } from '../../data/models/log-in-model';
import { HttpClient } from '@angular/common/http';
import { routesAccess } from 'src/app/config/api/network_api';
import { UserModel } from '../../data/models/user-model';

@Injectable({
  providedIn: 'root',
})
export class LogInService extends LogInRepository {
  private routes = routesAccess;

  constructor(private http: HttpClient) {
    super();
  }

  authenticationPost(data: LoginModelSend): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.routes.login, data);
  }

  getUserByIdGet(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.routes.userGetAllById}/${id}`);
  }

  loggedIn(){
    return !!sessionStorage.getItem('token');
  }

  getToken(){
    return sessionStorage.getItem('token');
  }


  logOut(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('access')
    sessionStorage.removeItem('user')
  }
}
