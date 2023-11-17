import { Observable } from "rxjs";
import { DocumentDataModel, DocumentDataPPPModel } from "../models/document_back_model";


export abstract class DocumentRepository {
  abstract getAllTypeDocumentsRepository(): Observable<DocumentDataModel>;
  abstract getAllDocumentsRepository(idPpp: string): Observable<DocumentDataPPPModel>;
}
