import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { DocumentsService } from '../services/documents.service';

@Injectable({
  providedIn: 'root',
})
export class DeleteDocumentsUseCase {
  constructor(private typeDocumentService: DocumentsService) {}

  execute(document: string): Promise<any | undefined> {
    const response = lastValueFrom(
      this.typeDocumentService.deleteDocumentsRepository(document)
    );

    return response;
  }
}
