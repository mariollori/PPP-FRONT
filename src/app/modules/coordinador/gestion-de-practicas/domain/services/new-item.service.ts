import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routesAccess } from 'src/app/config/api/network_api';
import { Observable } from 'rxjs';
import { PlanModel } from '../../data/models/plan';
import { NewItem } from '../../presentation/components/content-modal/create-item/create-new-item';

@Injectable({
  providedIn: 'root',
})
export class NewItemService {
  private routes = routesAccess;

  constructor(private http: HttpClient) {
  }

  getPlanAll(): Observable<PlanModel> {
    return this.http.get<PlanModel>(this.routes.plantGetAll);
  }
  getAreaByPlan(plan:string): Observable<PlanModel> {
    return this.http.get<PlanModel>(this.routes.getAreaPlan + `/${plan}`);
  }
  createQuestion(area:NewItem): Observable<void> {
    return this.http.post<void>(this.routes.createQuestion,area);
  }
}
