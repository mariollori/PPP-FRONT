import { Observable } from "rxjs";
import { DocumentBackModel, DocumentDataModel, DocumentDataPPP, DocumentDataPPPModel } from "../models/document_back_model";


export abstract class DocumentRepository {
  abstract getAllTypeDocumentsRepository(): Observable<DocumentDataModel>;
  abstract getAllDocumentsRepository(idPpp: string): Observable<DocumentDataPPPModel>;

  abstract createDocumentsRepository(documemt: DocumentBackModel): Observable<any>;
  abstract deleteDocumentsRepository(documemt: string): Observable<any>;

  abstract createEntherpriseRepository(entherprise: any): Observable<any>;
}
