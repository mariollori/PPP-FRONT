import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { StudentServiceApi } from '../services/student.services';
import { StudentEntity } from '../../data/entities/student.entity';


@Injectable({
  providedIn: 'root',
})
export class GetStudentsUseCase {
  constructor(private studentService: StudentServiceApi) {}

  execute(ppp:string): Promise<StudentEntity[]> {
    const response = lastValueFrom(this.studentService.getStudents(ppp));
    return response;
  }
}