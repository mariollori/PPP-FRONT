import { Component, OnInit } from '@angular/core'
import { StudentServiceApi } from '../../domain/services/student.services'
import { StudentEntity } from '../../data/entities/student.entity'
import { CommonModule } from '@angular/common';
import { GetStudentsUseCase } from '../../domain/usecase/getStudentsUseCase';
interface Steps {
  title: string;
  description: string;
}

@Component({
  selector: 'list-student',
  templateUrl: './list-student.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class ListStudentComponent implements OnInit {

  students: StudentEntity[] = []

  constructor(
    private  getStudentUseCase: GetStudentsUseCase
  ) { }

  ngOnInit(): void { 
    this.getStudents(); 
  }
  
  
  async getStudents(){
    try {
      this.students = await this.getStudentUseCase.execute('452e3d45-9e93-4f72-ace5-c188f6912f8b')
    } catch (error) {
      console.log(error)
    }
  }

  


}