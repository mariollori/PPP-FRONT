export class DocumentBackModel {
  type!: string;
  name!: string;
  urlDocument!: string;
  dateUpload!: Date;
  status!: string;
  ppp!: string;
}

export class DocumentDataModel {
  info!: string;
  data!: DocumentBackResponseModel[];
}
export class DocumentBackResponseModel {
  id!: string;
  name!: string;
  description!: string;
  status!: boolean;
}

export class DocumentDataPPPModel {
  info!: string;
  data!: DocumentDataPPP[];
}

export class DocumentDataPPP {
  id!: string;
  type!: string;
  name!: string;
  urlDocument!: string;
  dateUpload!: string;
  status!: string;
}
