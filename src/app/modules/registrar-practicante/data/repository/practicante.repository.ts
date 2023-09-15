import { Observable, map } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { StudentResponse } from "../models";
import { PracticanteEntity } from "../../domain/entity";
import { PracticanteMapper } from "../mappers/pracitcante.mapper";
import { IPracticanteRepository } from "../../domain/repository";

@Injectable({
    providedIn: 'root'
})
export class PracticanteRepository implements IPracticanteRepository {

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


}
