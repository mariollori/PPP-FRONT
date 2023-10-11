import { Observable } from 'rxjs'

import { StudentEntity } from '../entities/student.entity'

export interface IStudentRepository {

    getStudents(ppp: string): Observable< StudentEntity[] >

    createEvaluation(payload: Map<string, object>): Observable< any >
    
}