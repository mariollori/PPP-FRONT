import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { DocumentsService } from '../services/documents.service';
import { DocumentDataModel } from '../../data/models/document_back_model';

@Injectable({
  providedIn: 'root',
})
export class TypeDocumentsUseCase {
  constructor(private typeDocumentService: DocumentsService) {}

  execute(): Promise<DocumentDataModel | undefined> {
    const response = lastValueFrom(
      this.typeDocumentService.getAllTypeDocumentsRepository()
    );

    return response;
  }
}
