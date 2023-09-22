export class TypeDocumentModel {
  info!: string;
  data!: TypeDocumentData[];
}

export class TypeDocumentData {
  id!: string;
  name!: string;
  description!: string;
  status!: boolean;
}
