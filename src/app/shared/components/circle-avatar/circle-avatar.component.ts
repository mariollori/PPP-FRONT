import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-circle-avatar',
  templateUrl: './circle-avatar.component.html',
  styleUrls: ['./circle-avatar.component.css'],
  imports: [NgClass],
})
export class CircleAvatarComponent {
  @Input() imageUrl?: string;
  @Input() size?: string;
}
