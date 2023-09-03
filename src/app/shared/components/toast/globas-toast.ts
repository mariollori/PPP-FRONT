import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'global-toast',
  templateUrl: './globas-toast.html',
})
export class GlobasToast implements OnInit {
  @Input() message: string = '';
  @Output() closed = new EventEmitter<void>();

  ngOnInit() {
    setTimeout(() => {
      this.close();
    }, 5000);
  }

  close() {
    this.closed.emit();
  }
}
