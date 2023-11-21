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
export class CreateEnterpriseUseCase {
  constructor(private typeDocumentService: DocumentsService) {}

  execute(enterprise: any): Promise<any | undefined> {
    const response = lastValueFrom(
      this.typeDocumentService.createEntherpriseRepository(enterprise)
    );

    return response;
  }
}
