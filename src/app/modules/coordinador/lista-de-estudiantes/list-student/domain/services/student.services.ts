import { Observable, map } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { StudenResponse, StudentEntity } from '../../data/entities/student.entity'
import { IStudentRepository } from '../../data/repositories/student.repository'
import { routesAccess } from 'src/app/config/api/network_api'

@Injectable()
export class StudentServiceApi implements IStudentRepository {


    private routes = routesAccess;

    constructor(private http: HttpClient) { }

    getStudents(ppp: string): Observable< StudentEntity[] > {
        
        return this.http
                    .get< StudenResponse >(`${this.routes.getStudents}/${ ppp }`)
                    .pipe( map( response => response.data ) )

    }

}