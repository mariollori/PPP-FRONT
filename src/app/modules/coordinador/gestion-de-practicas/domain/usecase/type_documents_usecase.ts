import { lastValueFrom } from 'rxjs';
import { TypeDocumentModel } from '../../data/models/type_documents';
import { TypeDocumentsService } from '../services/type-documents.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypeDocumentsUseCase {
  constructor(private typeDocumentService: TypeDocumentsService) {}

  execute(): Promise<TypeDocumentModel | undefined> {
    const response = lastValueFrom(
      this.typeDocumentService.getAllTypeDocumentsRepository()
    );

    return response;
  }
}
