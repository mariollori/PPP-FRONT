import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalControlPractice } from '../content-modal/modal-control-practice.component';
import { GlobalModel } from 'src/app/shared/components/modal/global-modal';
import { DocumentsModel } from '../../../data/models/documents_model';
import { RegistrarEmpresaComponent } from 'src/app/modules/practicante/principal-home/presentation/components/content-body/registrar-empresa/registrar-empresa';
import { InfoBasicaPracticcante } from './info-basica/info-basica.component';
import { ItemsEvaluation } from './items-evaluation/items-evaluation';
import { GetAllDocumentByPPPUseCase } from '../../../domain/usecase/get_all_document_by_ppp_usecase';
import { DocumentDataPPP } from '../../../data/models/document_back_model';
import { LoadingPageComponent } from 'src/app/shared/components/loading/loading-page.component';

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
    LoadingPageComponent,
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
  position: string = '';

  documentsResponse: DocumentDataPPP[] = [];

  urlDocView: string = '';
  idDocument: string = '';

  constructor(private getAllDocumentByPppUseCase: GetAllDocumentByPPPUseCase) {}

  async ngOnInit() {
    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);
    await this.listDocuments();
  }

  async listDocuments() {
    const response = await this.getAllDocumentByPppUseCase.execute(
      this.userData.ppp.id
    );

    console.log(response!.data);

    this.documentsResponse = response!.data;
  }

  sexo(title: string, position: string) {
    this.urlDocView = "";
    this.idDocument = "";
    for (const docs of this.documentsResponse) {
      if (docs.type == position) {
        console.log("Entro " + " " + docs.type + " " + position);

        this.urlDocView = docs.urlDocument;
        this.idDocument = docs.id;
      }
    }
    this.title = title;
    this.message = title.toLowerCase();
    this.position = position;
    this.modalOpen = true;
  }

  nextPage(page: number) {
    this.item = page;
  }

  async recibirEvento(modal: any) {
    this.modalOpen = false;
    console.log(modal);
    await this.listDocuments();

  }
}
