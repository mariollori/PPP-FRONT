import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-circle-avatar',
  templateUrl: './circle-avatar.component.html',
  styleUrls: ['./circle-avatar.component.css']
})


export class CircleAvatarComponent {
  @Input() imageUrl?: string;
  @Input() size?:string;
}
