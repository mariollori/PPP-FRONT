import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routesAccess } from 'src/app/config/api/network_api';
import { Observable } from 'rxjs';
import { DocumentRepository } from '../../data/respository/documents_repository';
import {
  DocumentBackModel,
  DocumentDataModel,
  DocumentDataPPP,
  DocumentDataPPPModel,
} from '../../data/models/document_back_model';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService extends DocumentRepository {
  private routes = routesAccess;

  constructor(private http: HttpClient) {
    super();
  }

  getAllTypeDocumentsRepository(): Observable<DocumentDataModel> {
    return this.http.get<DocumentDataModel>(this.routes.typeDocumentGetAll);
  }

  getAllDocumentsRepository(idPpp: string): Observable<DocumentDataPPPModel> {
    return this.http.get<DocumentDataPPPModel>(
      `${this.routes.getAllDocumentPPP}/${idPpp}`
    );
  }

  createDocumentsRepository(documemt: DocumentBackModel): Observable<any> {
    return this.http.post<DocumentDataPPP>(
      `${this.routes.createDocuments}`,
      documemt
    );
  }
}
