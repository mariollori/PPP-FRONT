import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'input-text-medium',
  templateUrl: './input-text-medium.html',
})
export class InputTextMedium {

  @Input() borderColor: string = '';
  @Input() fondoColor: string = '';
  @Input() text: string = '';
}
