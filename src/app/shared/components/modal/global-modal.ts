import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { GlobalBgAlerts } from '../bg-alerts/global-bg-alerts';

@Component({
  standalone: true,
  selector: 'global-modal',
  templateUrl: './global-modal.html',
  imports: [CommonModule, GlobalBgAlerts],
})
export class GlobalModel {
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Input() closeText: string = 'Cerrar';

  @Output() actionOpen = new EventEmitter<void>();
  @Input() buttonAccion: boolean = true;
  @Input() textButtonAccion: string = 'Guardar';

  actionAlert: boolean = false;

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey() {
    this.showCloseConfirmation();
  }

  showCloseConfirmation() {
    this.actionAlert = true;
    // const userConfirmation = confirm(
    //   '¿Estás seguro de que quieres cerrar el modal? La información se perderá.'
    // );
    // if (userConfirmation) {
    //   this.close.emit();
    // }
  }

  actionOpenVoid() {
    this.actionOpen.emit();
  }

  emitActionAlert() {
    this.actionAlert = false;
  }

  emitCloseAlert() {
    this.actionAlert = false;
    this.close.emit();
  }
}
