import { Observable } from "rxjs";
import { TypeDocumentModel } from "../models/type_documents";


export abstract class TypeDocumentRepository {
  abstract getAllTypeDocumentsRepository(): Observable<TypeDocumentModel>;
}
