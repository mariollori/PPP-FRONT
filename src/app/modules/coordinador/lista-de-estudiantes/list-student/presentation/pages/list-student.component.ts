import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetStudentsUseCase } from '../../domain/usecase/getStudentsUseCase';
import { StudentEntity } from '../../data/entities/student.entity';
import { ProfileStudentComponent } from '../components/profile-student/profile-student.component';
interface Steps {
  title: string;
  description: string;
}

@Component({
  selector: 'list-student',
  templateUrl: './list-student.component.html',
  standalone: true,
  imports: [CommonModule, ProfileStudentComponent]
})
export class ListStudentComponent implements OnInit {

  isShowModal = false
  isShowModalOther = false
  students: StudentEntity[] = []

  studentSelected: StudentEntity | null = null

  ngOnInit(): void {
    this.getStudents();
  }

  constructor(
    private getStudentUseCase: GetStudentsUseCase
  ) { }

  onShowModalEvaluation(value: boolean) {
    this.isShowModal = value
  }

  onShowOtherModalEvaluation() {
    this.isShowModalOther = true
  }

  handleShowProfile(student: StudentEntity) {
    this.studentSelected = student
  }

  async getStudents() {
    try {
      this.students = await this.getStudentUseCase.execute('452e3d45-9e93-4f72-ace5-c188f6912f8b')
    } catch (error) {
      console.log(error)
    }
  }

}
