import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserModelData } from 'src/app/modules/auth/log-in/data/models/user-model';
import { GetAllUserByIdUseCase } from 'src/app/modules/auth/log-in/domain/usecase/getUserByIdUseCase';
import { CreateEnterpriseUseCase } from 'src/app/modules/practicante/control-practice/domain/usecase/create_enterprise_usecase';
import { ButtonStandAlone } from 'src/app/shared/components/button/button-shared.standalone';
import { InputTextMedium } from 'src/app/shared/components/input-text-medium/input-text-medium';
import { LoadingPageComponent } from 'src/app/shared/components/loading/loading-page.component';
@Component({
  standalone: true,
  selector: 'registrar-empresa',
  templateUrl: './registrar-empresa.html',
  imports: [
    InputTextMedium,
    ButtonStandAlone,
    CommonModule,
    LoadingPageComponent,
  ],
})
export class RegistrarEmpresaComponent implements OnInit {
  userDataStorage = new UserModelData();

  constructor(
    private createEnterprise: CreateEnterpriseUseCase,
    private getAllUserByIdUseCase: GetAllUserByIdUseCase
  ) {}

  formValueCompany: IFormValue = {
    name: '',
    area: '',
    ruc: '',
    address: '',
    bussinessMentor: '',
    dniMentor: '',
    cellphoneMentor: '',
    emailMentor: '',
    academicDegreeMentor: '',
    status: false,
    ppp: '',
  };

  /* ui */
  @Output() pito = new EventEmitter<number>();

  userData: any;

  ngOnInit() {
    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);
  }

  async handleSave() {
    const data: IFormValue = {
      ...this.formValueCompany,
      status: true,
      ppp: this.userData?.ppp?.id!,
    };

    /**
     * validamos que todo el objeto esté completo
     * sin campos vacios
     */
    if (
      !Object.values(data).every(
        (value) => value !== null && value !== undefined && value !== ''
      )
    ) {
      return;
    }

    console.log({ data });

    // TODO: agregar conexion con la bbdd
    await this.createEnterprise.execute(data);

    const userDataResponse = await this.getAllUserByIdUseCase.execute(
      this.userData.id
    );

    console.log("userDataResponse");
    console.log(userDataResponse);


    this.userDataStorage = userDataResponse!.data;
    sessionStorage.setItem('userbar', JSON.stringify(this.userDataStorage));
    console.log("this.userDataStorage");
    console.log(this.userDataStorage);

    // TODO: toast de confirmación

    // TODO: mandamos a la otra ventana luego de registrar la empresa
    this.pito3();
  }

  pito3() {
    this.pito.emit(1);
  }

  onChangeValue(value: string, typeText: string) {
    this.formValueCompany = { ...this.formValueCompany, [typeText]: value };
  }
}

interface IFormValue {
  name: string;
  area: string;
  ruc: string;
  address: string;
  bussinessMentor: string;
  dniMentor: string;
  cellphoneMentor: string;
  emailMentor: string;
  academicDegreeMentor: string;
  status: boolean;
  ppp: string;
}
