import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonStandAlone } from 'src/app/shared/components/button/button-shared.standalone';
import { InputTextMedium } from 'src/app/shared/components/input-text-medium/input-text-medium';
@Component({
  standalone: true,
  selector: 'registrar-empresa',
  templateUrl: './registrar-empresa.html',
  imports: [InputTextMedium, ButtonStandAlone, CommonModule],
})
export class RegistrarEmpresaComponent implements OnInit {
  @Output() pito = new EventEmitter<number>();

  userData: any;

  ngOnInit() {
    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);
  }

  pito3() {
    this.pito.emit(1);
  }
}
