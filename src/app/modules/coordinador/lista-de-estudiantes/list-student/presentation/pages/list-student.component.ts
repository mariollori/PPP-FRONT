import { Component, OnInit } from '@angular/core'
import { StudentServiceApi } from '../../domain/services/student.services'
import { StudentEntity } from '../../data/entities/student.entity'
import { CommonModule } from '@angular/common';
import { GetStudentsUseCase } from '../../domain/usecase/getStudentsUseCase';
import { GlobalModel } from "src/app/shared/components/modal/global-modal";
import { FormsModule } from '@angular/forms';
interface Steps {
  title: string;
  description: string;
}

@Component({
  selector: 'list-student',
  templateUrl: './list-student.component.html',
  standalone:true,
  imports:[CommonModule, GlobalModel, FormsModule]
})
export class ListStudentComponent implements OnInit {

  isShowModal = false
  students: StudentEntity[] = []
  preguntas: Pregunta[] = [{ pregunta: '', showBoton: false }]

  constructor(
    private  getStudentUseCase: GetStudentsUseCase
  ) { }

  onShowModalEvaluation() {
    this.isShowModal = true
  }

  onCrearNuevaPregunta(index: number) {

    const preguntaEncontrada =  this.preguntas[index]

    if ( preguntaEncontrada.pregunta === '' ) {
      alert("Primero rellene el campo de pregunta!")
      return
  }
  this.preguntas[index] = { ...preguntaEncontrada, showBoton: true }

  this.preguntas.push({
    pregunta: '',
    showBoton: false
})
  }

  eliminarPregunta(index: number) {
    this.preguntas.splice(index, 1)
}


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
interface Pregunta {
  pregunta: string
  showBoton: boolean
}