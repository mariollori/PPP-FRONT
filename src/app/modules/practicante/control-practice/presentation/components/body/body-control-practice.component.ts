import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalControlPractice } from '../content-modal/modal-control-practice.component';
import { GlobalModel } from 'src/app/shared/components/modal/global-modal';
import { DocumentsModel } from '../../../data/models/documents_model';
import { RegistrarEmpresaComponent } from 'src/app/modules/practicante/principal-home/presentation/components/content-body/registrar-empresa/registrar-empresa';
import { InfoBasicaPracticcante } from './info-basica/info-basica.component';
import { ItemsEvaluation } from './items-evaluation/items-evaluation';

@Component({
  standalone: true,
  selector: 'body-control-practice',
  templateUrl: './body-control-practice.component.html',
  imports: [
    ModalControlPractice,
    GlobalModel,
    CommonModule,
    RegistrarEmpresaComponent,
    InfoBasicaPracticcante,
    ItemsEvaluation,
  ],
})
export class BodyControlPractice implements OnInit {
  item: number = 1;

  modalOpen: boolean = false;

  documents = new DocumentsModel();

  docs = this.documents.documents;

  userData: any;

  title: string = '';
  message: string = '';
  position: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);
  }

  sexo(title: string, position: number) {
    this.title = title;
    this.message = title.toLowerCase();
    this.position = position;
    this.modalOpen = true;
  }

  nextPage(page: number) {
    this.item = page;
  }
}
