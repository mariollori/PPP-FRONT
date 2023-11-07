import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModel } from 'src/app/shared/components/modal/global-modal';
import { ModalEvaluationComponent } from '../modal-evaluation/modal-evaluation.component';

@Component({
    selector: 'profile-student',
    templateUrl: './profile-student.component.html',
    standalone: true,
    imports: [CommonModule, GlobalModel, ModalEvaluationComponent]
})
export class ProfileStudentComponent implements OnInit {

    isShowModal = false
    isShowModalOther = false

    ngOnInit(): void {
    }
  
    constructor(
    ) { }
  
    onShowModalEvaluation(value: boolean) {
      this.isShowModal = value
    }
  
    onShowOtherModalEvaluation() {
      this.isShowModalOther = true
    }

}