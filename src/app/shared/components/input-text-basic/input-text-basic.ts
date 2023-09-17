import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output, Input, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'input-text-basic',
  templateUrl: './input-text-basic.html',
  imports: [NgClass, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextBasic),
      multi: true
    }
  ]
})
export class InputTextBasic {
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() ngModel: any = '';
  @Input() disabled: boolean = false;

  @Input() typeInput = 'text';
  @Input() backgroundInput = '';
  @Input() activeBackgroundInput = '';
  @Input() colorPlaceholeder = '';
  @Input() placeholderText = '';
  @Input() name = '';

  private innerValue: any = '';
  private onChange: any = () => {};
  private onTouched: any = () => {};

  onInputChange(value: any) {
    this.inputValueChange.emit(value.target.value);
    this.onChange(this.innerValue);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.innerValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }
}
