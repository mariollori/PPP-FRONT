import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModel } from 'src/app/shared/components/modal/global-modal';
import { ModalEvaluationComponent } from '../modal-evaluation/modal-evaluation.component';
import { StudentEntity, Company, PPP } from '../../../data/entities/student.entity';
import { GetStudentsUseCase } from '../../../domain/usecase/getStudentsUseCase';

@Component({
    selector: 'profile-student',
    templateUrl: './profile-student.component.html',
    standalone: true,
    imports: [CommonModule, GlobalModel, ModalEvaluationComponent]
})
export class ProfileStudentComponent implements OnInit {

    isShowModal = false
    isShowModalOther = false
    students: StudentEntity[] = [];
    companies: Company[] = [];
    ppps: PPP[] = []

    studentSelected: StudentEntity | null = null
    ppp: PPP | null = null;

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