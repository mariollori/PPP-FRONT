import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalControlPractice } from '../content-modal/modal-control-practice.component';
import { GlobalModel } from 'src/app/shared/components/modal/global-modal';
import { DocumentsModel } from '../../../data/models/documents_model';

@Component({
  standalone: true,
  selector: 'body-control-practice',
  templateUrl: './body-control-practice.component.html',
  imports: [ModalControlPractice, GlobalModel, CommonModule],
})
export class BodyControlPractice implements OnInit {
  item: number = 2;

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
