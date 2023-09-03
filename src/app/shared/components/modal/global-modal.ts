import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'global-modal',
  templateUrl: './global-modal.html',
  imports: [CommonModule]
})
export class GlobalModel {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  @Input() closeText: string = 'Cerrar';
  @Input() buttonAccion: boolean = true;
  @Input() textButtonAccion: string = 'Guardar';

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey() {
    this.showCloseConfirmation();
  }

  showCloseConfirmation() {
    const userConfirmation = confirm(
      '¿Estás seguro de que quieres cerrar el modal? La información se perderá.'
    );
    if (userConfirmation) {
      this.close.emit();
    }
  }
}
