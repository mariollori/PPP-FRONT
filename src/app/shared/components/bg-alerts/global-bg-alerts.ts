import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'global-bg-alerts',
  templateUrl: './global-bg-alerts.html',
  imports: [CommonModule],
})
export class GlobalBgAlerts {
  @Output() actionAlert: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actionAccept: EventEmitter<void> = new EventEmitter<void>();

  @Input() textCancel: string = 'Cancelar';
  @Input() textAccept: string = 'Continuar';

  @Input() alert: string = '';

  // Método para emitir el evento
  emitActionAlert() {
    this.actionAlert.emit(false);
  }

  acceptAction() {
    this.actionAccept.emit();
  }
}
