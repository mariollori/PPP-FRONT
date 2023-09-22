import { Injectable } from '@angular/core';
import { TypeDocumentRepository } from '../../data/repositories/type_documents_repository';
import { HttpClient } from '@angular/common/http';
import { routesAccess } from 'src/app/config/api/network_api';
import { Observable } from 'rxjs';
import { TypeDocumentModel } from '../../data/models/type_documents';

@Injectable({
  providedIn: 'root',
})
export class TypeDocumentsService extends TypeDocumentRepository {
  private routes = routesAccess;

  constructor(private http: HttpClient) {
    super();
  }

  getAllTypeDocumentsRepository(): Observable<TypeDocumentModel> {
    return this.http.get<TypeDocumentModel>(this.routes.typeDocumentGetAll);
  }
}
