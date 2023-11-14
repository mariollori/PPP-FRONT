import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegistrarEmpresaComponent } from '../registrar-empresa/registrar-empresa';
import { BodyControlPractice } from 'src/app/modules/practicante/control-practice/presentation/components/body/body-control-practice.component';

@Component({
  standalone: true,
  selector: 'gestion-informacion-empresa',
  templateUrl: './gestion-informacion-empresa.html',
  imports: [CommonModule, RegistrarEmpresaComponent, BodyControlPractice],
})
export class GentionInfoEmpresaModule implements OnInit{
  pito2: number = 1;
  mostrarEmpresa: boolean = false;

  userData: any;

  ngOnInit() {
    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);
  }

  mostrarPito2(div: number) {
    this.pito2 = div;
  }

  volver(num: number) {
    this.pito2 = num;
  }

  empresaDocs(empresa: boolean) {
    this.pito2 = 3;
    this.mostrarEmpresa = empresa;
  }
}
