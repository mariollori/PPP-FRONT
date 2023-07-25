import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'input-text-medium-standalone',
  templateUrl: './input-text-medium.html',
  styleUrls: ['./input-text-medium.css'],
  imports: [NgClass],
})
export class InputTextMedium {
  @Input() widht: string = ''; //'w-full';
  @Input() height: string = ''; //'h-[55px]';
  @Input() borderColor: string = ''; //'border-red-500';
  @Input() borderInput: string = ''; //'border-2';
  @Input() fondoColor: string = ''; //'bg-bluePrimary';
  @Input() radius: string = ''; //'rounded-[15px]';
  @Input() fontSize: string = ''; //'text-[15px]';
  @Input() fontFamily: string = ''; //'font-montserrat';
  @Input() fontWeigth: string = ''; //'font-normal';
  @Input() transition: string = ''; //'transition-all';
  @Input() duration: string = ''; //'duration-300';
  @Input() shadow: string = ''; //'shadow-md

  @Input() placeholder: string = ''; // 'Ingrese un valor';
  @Input() colorPlaceholder: string = ''; // 'text-hellowPrimary';
  @Input() colorPlaceholderDiv: string = ''; // 'bg-hellowPrimary';
  @Input() fontSizePlaceholder: string = ''; // 'text-[17px]';
  @Input() fontFamilyPlaceholder: string = ''; // 'font-montserrat';
  @Input() fontWeigthPlaceholder: string = ''; // 'font-normal';

  @Input() icon: string = '';
  @Input() iconColor: string = '';
  @Input() iconSize: string = '';

  isPlaceholderActive: boolean = false;
  inputId!: string;

  ngOnInit() {
    this.inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  }

  movePlaceholder() {
    this.isPlaceholderActive = true;
  }

  checkInput() {
    const inputElement = document.getElementById(
      this.inputId
    ) as HTMLInputElement;
    if (inputElement && !inputElement.value) {
      this.isPlaceholderActive = false;
    }
  }

  activateInput() {
    const inputElement = document.getElementById(this.inputId);
    if (inputElement) {
      inputElement.focus();
    }
  }
}
