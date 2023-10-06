import { Observable, map } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AreaPlanResponse, StudentResponse } from "../models";
import { PracticanteEntity } from "../../domain/entity";
import { PracticanteMapper } from '../mappers/pracitcante.mapper';
import { IPracticanteRepository } from "../../domain/repository";
import { AreaPlanEntity } from "../../domain/entity/area-plan.entity";
import { AreaMapper } from "../mappers";

@Injectable({
    providedIn: 'root'
})
export class PracticanteRepository implements IPracticanteRepository {

    private BASE_PATH = 'https://ppp-services-wu3h-dev.fl0.io/api'

    constructor(
        private http: HttpClient
    ) { }
    
    getInfoStudentUpeu(code: string): Observable< PracticanteEntity > {

        return this
                .http
                .get< StudentResponse >(`https://backend-tienda-union.herokuapp.com/api/v1/upeu/get-students-by-code-university/${ code }`)
                .pipe(
                    map(( response: StudentResponse ) => {
                        
                        return PracticanteMapper.modelToEntity( response.data );
                        
                    })
                );

    }

    postRegisterPracticante(payload: Map<string, object>): Observable< string > {

        return this
                .http
                .post<{ data: string }>(`${this.BASE_PATH}/student/create-student`, Object.fromEntries( payload ))
                .pipe( 
                    map(( response ) => {
                        return response.data
                    })
                );
        
    }

    getAreasPlan(idPlan: string): Observable<AreaPlanEntity[]> {

        return this
                .http
                .get< AreaPlanResponse >(`${this.BASE_PATH}/plan/get-areas-plan/${ idPlan }`)
                .pipe(
                    map(( response: AreaPlanResponse ) => {
                        return AreaMapper.modelsToEntities( response.data );
                    })
                );


    }


}
