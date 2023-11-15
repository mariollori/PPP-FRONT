import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  standalone: true,
  selector: 'modal-control-practice',
  templateUrl: './modal-control-practice.component.html',
  imports: [CommonModule],
})
export class ModalControlPractice {
  documentCvCharged: boolean = false;

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() position: number = 0;
}
