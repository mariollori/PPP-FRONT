import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonStandAlone } from 'src/app/shared/components/button/button-shared.standalone';
import { InputTextMedium } from 'src/app/shared/components/input-text-medium/input-text-medium';

@Component({
  standalone: true,
  selector: 'edit-password',
  templateUrl: './edit-password.html',
  imports: [CommonModule, InputTextMedium, ButtonStandAlone],
})
export class EditPasswordComponent implements OnInit {
  async ngOnInit() {}
}
