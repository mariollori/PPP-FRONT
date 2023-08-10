import { Component, OnInit } from '@angular/core'
import { StudentServiceApi } from '../../domain/services/student.services'
import { StudentEntity } from '../../data/entities/student.entity'
interface Steps {
  title: string;
  description: string;
}

@Component({
  selector: 'list-student',
  templateUrl: './list-student.component.html',
})
export class ListStudentComponent implements OnInit {

  students: StudentEntity[] = []

  constructor(
    private studentServiceApi: StudentServiceApi
  ) { }

  ngOnInit(): void {

    this.studentServiceApi
          .getStudents('452e3d45-9e93-4f72-ace5-c188f6912f8b')
          .subscribe( x => { console.log({ x }); this.students = x })

  }


}