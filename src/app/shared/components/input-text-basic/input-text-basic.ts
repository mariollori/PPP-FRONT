import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'input-text-basic',
  templateUrl: './input-text-basic.html',
  imports: [NgClass],
})
export class InputTextBasic {
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(value: any) {
    this.inputValueChange.emit(value.target.value);
  }
}
