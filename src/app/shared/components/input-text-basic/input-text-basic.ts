import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'input-text-basic',
  templateUrl: './input-text-basic.html',
  imports: [NgClass],
})
export class InputTextBasic {
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() typeInput = 'text';
  @Input() backgroundInput = '';
  @Input() activeBackgroundInput = '';
  @Input() colorPlaceholeder = '';
  @Input() placeholderText = '';

  onInputChange(value: any) {
    this.inputValueChange.emit(value.target.value);
  }
}
