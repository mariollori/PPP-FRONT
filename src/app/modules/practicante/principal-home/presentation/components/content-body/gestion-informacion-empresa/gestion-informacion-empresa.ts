import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RegistrarEmpresaComponent } from '../registrar-empresa/registrar-empresa';
import { BodyControlPractice } from 'src/app/modules/practicante/control-practice/presentation/components/body/body-control-practice.component';
import { GlobasToast } from 'src/app/shared/components/toast/globas-toast';
import { LoadingPageComponent } from 'src/app/shared/components/loading/loading-page.component';

@Component({
  standalone: true,
  selector: 'gestion-informacion-empresa',
  templateUrl: './gestion-informacion-empresa.html',
  imports: [
    CommonModule,
    RegistrarEmpresaComponent,
    BodyControlPractice,
    GlobasToast,
    LoadingPageComponent,
  ],
})
export class GentionInfoEmpresaModule implements OnInit {
  type: string = '';
  message: string = '';
  toast: boolean = false;

  validateCompany!: boolean;

  pito2: number = 1;
  mostrarEmpresa: boolean = false;

  userData: any;

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);
  }

  mostrarPito2(div: number) {
    if (!this.userData.ppp || !this.userData.ppp.company) {
      this.pito2 = div;
    } else {
      this.type = 'information';
      this.message =
        'Usted ya tiene una empresa, no puede registrar otra, contactese con su supervisor.';
      this.toast = true;
      this.validateCompany == true;
      setTimeout(() => {
        this.toast = false;
        this.message = '';
        this.type = '';
        this.cdr.detectChanges();
      }, 5000);
    }
  }

  volver(num: number) {
    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);

    // this.type = 'success';
    //   this.message =
    //     'Se acaba de crear la empresa correctamente...!!!';
    //   this.toast = true;
    //   this.validateCompany == true;
    //   setTimeout(() => {
    //     this.toast = false;
    //     this.message = '';
    //     this.type = '';
    //     this.cdr.detectChanges();
    //   }, 5000);

    this.pito2 = num;
    this.cdr.detectChanges();
  }

  empresaDocs(empresa: boolean) {
    this.pito2 = 3;
    this.mostrarEmpresa = empresa;
  }
}
