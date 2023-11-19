import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { DocumentsService } from '../services/documents.service';
import {
  DocumentBackModel,
  DocumentDataModel,
  DocumentDataPPP,
} from '../../data/models/document_back_model';

@Injectable({
  providedIn: 'root',
})
export class CreateDocumentsUseCase {
  constructor(private typeDocumentService: DocumentsService) {}

  execute(document: DocumentBackModel): Promise<any | undefined> {
    const response = lastValueFrom(
      this.typeDocumentService.createDocumentsRepository(document)
    );

    return response;
  }
}
