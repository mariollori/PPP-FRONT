import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalModel } from 'src/app/shared/components/modal/global-modal';
import { ModalEvaluationComponent } from '../components/modal-evaluation/modal-evaluation.component';

@Component({
  selector: 'list-student',
  templateUrl: './list-student.component.html',
  standalone:true,
  imports:[ CommonModule, GlobalModel, ModalEvaluationComponent ]
})
export class ListStudentComponent {

  isShowModal = false

  constructor( ) { }

  onShowModalEvaluation(value: boolean) {
    this.isShowModal = value
  }


}