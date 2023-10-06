import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputTextMedium } from 'src/app/shared/components/input-text-medium/input-text-medium';
import { GlobalModel } from 'src/app/shared/components/modal/global-modal';
import { ItemsOfSettingGeneralComite } from '../../../data/models/array_modules';
import { ConfigPracticanteModal } from '../content-modal/config-practicante/config-practicante';
import { ConfigSupervisorMoldal } from '../content-modal/config-supervisor/config-supervisor';
import { CreateNewPlanModal } from '../content-modal/create-new-plan/create-new-plan';
import { CreateNewItemModal } from '../content-modal/create-item/create-new-item';
import { TypeDocumentData } from '../../../data/models/type_documents';
import { TypeDocumentsUseCase } from '../../../domain/usecase/type_documents_usecase';
import { LoadingPageComponent } from 'src/app/shared/components/loading/loading-page.component';

@Component({
  standalone: true,
  selector: 'body-gestion-practicas',
  templateUrl: './body-gestion-de-practicas.component.html',
  imports: [
    NgClass,
    RouterModule,
    CommonModule,
    InputTextMedium,
    GlobalModel,
    ConfigPracticanteModal,
    ConfigSupervisorMoldal,
    CreateNewPlanModal,
    CreateNewItemModal,
    LoadingPageComponent,
  ],
})
export class BodyGestionDePracticas implements OnInit {
  eventNumaber: number = 0;

  typeDocumentsListAll: TypeDocumentData[] = [];

  itemsComite = new ItemsOfSettingGeneralComite();

  position!: number;

  gestion_users = this.itemsComite.gestion_user;
  gestion_plan = this.itemsComite.gestion_plan;

  modalOpen: boolean = false;

  constructor(private typeDocumentsGetAll: TypeDocumentsUseCase) {}

  ngOnInit(): void {
    this.getAllTypeDocuments();
  }

  actionOpen() {
    console.log(this.eventNumaber);

    switch (this.eventNumaber) {
      case 4:
        console.log('entre felicidades');
        break;

      default:
        break;
    }
  }

  createNewPlan(data: any, num: number) {
    // console.log("pichulas es lo que comes");
    console.log(data);

    this.eventNumaber = num;
  }

  async getAllTypeDocuments() {
    const response = await this.typeDocumentsGetAll.execute();
    const { data } = response!;
    this.typeDocumentsListAll = data;
  }

  toggleModal(position: number) {
    if (position == 1) {
      this.position = position;
    } else {
      this.position = position;
      this.modalOpen = true;
    }
  }

  closeModal() {
    this.modalOpen = false;
  }
}
