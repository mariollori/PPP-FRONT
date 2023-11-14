import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Storage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from '@angular/fire/storage';

import { PracticanteEntity } from '../../../domain/entity';
import { PracticanteRepository } from '../../../data/repository';
import { AreaPlanEntity } from '../../../domain/entity/area-plan.entity';
import { lastValueFrom } from 'rxjs';
import { AuthenticationLoginUseCase } from 'src/app/modules/auth/log-in/domain/usecase/authenticationLoginUseCase';
import { GetAllUserByIdUseCase } from 'src/app/modules/auth/log-in/domain/usecase/getUserByIdUseCase';
import { LoginModelData } from 'src/app/modules/auth/log-in/data/models/log-in-model';
import { UserModelData } from 'src/app/modules/auth/log-in/data/models/user-model';

@Component({
  selector: 'second-step-register',
  templateUrl: './second-step-register.page.html',
})
export class SecondStepRegister implements OnInit {
  private TOTAL_MB_ALLOWED = 2000;
  private PLAN_PPP_SELECTED = '452e3d45-9e93-4f72-ace5-c188f6912f8b';

  loginData = new LoginModelData();
  userData = new UserModelData();

  toast: boolean = false;
  message: string = '';
  typeToast: string = '';

  documentCvCharged: File | undefined = undefined;
  practicante: PracticanteEntity = {
    code: '',
    firstName: '',
    lastName: '',
    dni: '',
    yearAcademic: '',
    cycleAcademic: '',
    email: '',
    numberPhone: '',
    area: '0',
    urlProfile: '',
    password: '',
  };

  areaPlans: AreaPlanEntity[] = [];

  /**
   * Modals
   */
  isShowModal = false;

  constructor(
    private router: Router,
    private storage: Storage,
    private authenticationLoginUseCase: AuthenticationLoginUseCase,
    private getAllUserByIdUseCase: GetAllUserByIdUseCase,
    private practicanteRepository: PracticanteRepository,
    private cdr: ChangeDetectorRef
  ) {
    const responseFound = this.router.getCurrentNavigation()?.extras
      .state as PracticanteEntity;

    if (!responseFound) {
      this.router.navigate(['/crear-cuenta']);
      return;
    }

    this.practicante = { ...this.practicante, ...responseFound };
  }

  async ngOnInit(): Promise<void> {
    const areaPlasFound = await lastValueFrom(
      this.practicanteRepository.getAreasPlan(this.PLAN_PPP_SELECTED)
    );
    this.areaPlans = areaPlasFound;
  }

  onUploadDocument(event: Event) {
    const elementFile = event.target as HTMLInputElement;

    if (this.TOTAL_MB_ALLOWED >= elementFile.files![0].size) {
      alert('No subas un archivo de mas de 2MB.');
      return;
    }

    this.documentCvCharged = elementFile.files![0];
  }

  onChangeValue(value: string, typeText: string) {
    this.practicante = { ...this.practicante, [typeText]: value };
  }

  async onRegisterPracticante() {
    try {
      const urlProfile = await this.uploadDocumentInFirebase();

      const data = new Map<string, any>();

      data.set('urlCv', urlProfile);
      data.set('code', this.practicante.code);
      data.set('nameCv', this.documentCvCharged?.name!);
      data.set('planPPP', this.PLAN_PPP_SELECTED);
      data.set('cycle', Number(this.practicante.cycleAcademic));

      const user = {
        userName: this.practicante.code,
        password: this.practicante.password!,
        firstName: this.practicante.firstName,
        lastName: this.practicante.lastName,
        email: this.practicante.email!,
        cellphone: this.practicante.numberPhone!,
        area: this.practicante.area!,
        urlProfile:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      };

      data.set('user', user);

      await lastValueFrom(
        this.practicanteRepository.postRegisterPracticante(data)
      );

      const userLogIn = {
        userName: this.practicante.code,
        password: this.practicante.password!,
      };

      const response = await this.authenticationLoginUseCase.execute(userLogIn);

      const userDataResponse = await this.getAllUserByIdUseCase.execute(
        response!.data.id
      );

      sessionStorage.setItem('token', response!.data.token);

      sessionStorage.setItem('access', JSON.stringify(response!.data.accesses));

      let json = JSON.parse(window.atob(response!.data.token.split('.')[1]));

      this.loginData = response!.data;

      this.userData = userDataResponse!.data;

      sessionStorage.setItem('user', JSON.stringify(this.loginData));
      sessionStorage.setItem('userbar', JSON.stringify(this.userData));

      this.message = 'Has iniciado sesión exitosamente...!!!';
      this.typeToast = 'success';
      this.toast = true;
      setTimeout(
        () => (
          (this.toast = false), (this.message = ''), this.cdr.detectChanges()
        ),
        5000
      );

      this.router.navigate(['/menu-items']);
    } catch (error) {
      this.message =
        'Oops, error al registrarte. Al parecer no eres acto para iniciar tus practicas.';
      this.typeToast = 'error';
      this.toast = true;
      setTimeout(
        () => (
          (this.toast = false), (this.message = ''), this.cdr.detectChanges()
        ),
        5000
      );
      console.log(error);
    }
  }

  onToggleModal() {
    this.isShowModal = true;
  }

  private async uploadDocumentInFirebase() {
    const documentRef = ref(
      this.storage,
      `documents/students/${this.practicante.code}/cv/${this.documentCvCharged?.name}`
    );

    const uploadTask = uploadBytesResumable(
      documentRef,
      this.documentCvCharged!
    );

    const snapshot = await uploadTask;

    const downloadUrl = await getDownloadURL(snapshot.ref);

    return downloadUrl;
  }
}
