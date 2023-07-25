import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeRepository } from '../../data/repositories/home-repository';
import { HomeModel } from '../models/home-models';
import { routesAccess } from '../../../../config/api/network_api';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends HomeRepository {

  private routes = routesAccess;

  constructor(private http: HttpClient) {
    super();
  }

  getAllImagesHomeRepository(): Observable<HomeModel> {
    return this.http.get<HomeModel>(this.routes.basesPPPGet);
  }
}
