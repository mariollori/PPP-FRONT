// button-standalone.component.ts
import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'button-standalone',
  templateUrl: './button-shared.standalone.html',
  imports: [NgClass],
})
export class ButtonStandAlone {
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() colorBorder: string = '';
  @Input() colorFondo: string = '';
  @Input() radius: string = '';
  @Input() borderButton: string = '';
  @Input() hover: string = '';
  @Input() transition: string = '';
  @Input() duration: string = '';
  @Input() text: string = '';
  @Input() colorText: string = '';
  @Input() fontFamily: string = '';
  @Input() fontWeight: string = '';
  @Input() fontSize: string = '';
}
