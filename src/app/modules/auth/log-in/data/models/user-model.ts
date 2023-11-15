export class UserModel {
  info!: string;
  data!: UserModelData;
}

export class UserModelData {
  code!: string;
  cycle!: number;
  intershipHours!: number;
  nameCv!: string;
  urlCv!: string;
  finalRate!: number;
  planPPP!: string;
  id!: string;
  userName!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  cellphone!: string;
  area!: string;
  numStudents!: number;
  urlProfile!: string;
  status!: boolean;
  ppp!: PPPModel;
}

export class PPPModel {
  id!: string;
  intershipHours!: number;
  area!: string;
  startedDate!: string;
  finishedDate!: string;
  rate!: number;
  status!: boolean;
  company!: CompanyModel;
  advisor!: AdivsorModel;
}

export class CompanyModel {
  academicDegreeMentor!: string;
  address!: string;
  area!: string;
  bussinessMentor!: string;
  cellphoneMentor!: string;
  dniMentor!: string;
  emailMentor!: string;
  id!: string;
  name!: string;
  ruc!: string;
  status!: boolean;
}

export class AdivsorModel {
  id!: string;
  userName!: string;
  firstName!: string;
  password!: string;
  lastName!: string;
  email!: string;
  cellphone!: string;
  area!: string;
  numStudents!: string;
  urlProfi1e!: string;
  status!: boolean;
}
