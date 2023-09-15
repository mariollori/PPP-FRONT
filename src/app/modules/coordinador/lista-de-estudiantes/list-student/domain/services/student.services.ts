import { Observable, map } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { StudenResponse, StudentEntity } from '../../data/entities/student.entity'
import { IStudentRepository } from '../../data/repositories/student.repository'

@Injectable()
export class StudentServiceApi implements IStudentRepository {

    constructor(private http: HttpClient) { }

    getStudents(ppp: string): Observable< StudentEntity[] > {
        
        return this.http
                    .get< StudenResponse >(`https://upeu-ppp-services.onrender.com/api/student/get-students-by-plan-ppp/${ ppp }`)
                    .pipe( map( response => response.data ) )

    }

}