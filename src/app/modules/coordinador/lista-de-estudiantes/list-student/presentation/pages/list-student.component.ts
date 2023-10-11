import { Component, OnInit } from '@angular/core'
import { StudentServiceApi } from '../../domain/services/student.services'
import { StudentEntity } from '../../data/entities/student.entity'
import { CommonModule } from '@angular/common';
import { GetStudentsUseCase } from '../../domain/usecase/getStudentsUseCase';
import { InputTextMedium } from "../../../../../../shared/components/input-text-medium/input-text-medium";
interface Steps {
  title: string;
  description: string;
}

@Component({
    selector: 'list-student',
    templateUrl: './list-student.component.html',
    standalone: true,
    imports: [CommonModule, InputTextMedium]
})
export class ListStudentComponent implements OnInit {

  students: StudentEntity[] = []
  mostrarElemento: boolean = false;
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
  animacion(){
    if(!this.mostrarElemento) this.mostrarElemento = true; else this.mostrarElemento = false;
  }

}