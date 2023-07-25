export class LoginModel {
  info!: string;
  data!: LoginModelData;
}

export class LoginModelData {
  id!: string;
  userName!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  cellphone!: string;
  area!: string;
  numStudents!: string;
  urlProfile!: string;
  status!: string;
  token!: string;
}

export class LoginModelSend {
  userName!: string;
  password!: string;
}
