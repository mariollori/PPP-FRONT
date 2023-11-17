import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { DocumentsService } from '../services/documents.service';
import { DocumentDataPPPModel } from '../../data/models/document_back_model';

@Injectable({
  providedIn: 'root',
})
export class GetAllDocumentByPPPUseCase {
  constructor(private typeDocumentService: DocumentsService) {}

  execute(idPpp: string): Promise<DocumentDataPPPModel | undefined> {
    const response = lastValueFrom(
      this.typeDocumentService.getAllDocumentsRepository(idPpp)
    );

    return response;
  }
}
