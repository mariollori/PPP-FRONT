import { Component, Input } from '@angular/core';
import { AvatarSize } from 'src/app/config/enum/sizes';



@Component({
  selector: 'app-circle-avatar',
  templateUrl: './circle-avatar.component.html',
  styleUrls: ['./circle-avatar.component.css']
})


export class CircleAvatarComponent {
  @Input() imageUrl?: string;
  @Input() size?:AvatarSize;



  getAvatarSizeClass(): string {
    switch (this.size) {
      case AvatarSize.XS:
        return 'avatar-xs';
      case AvatarSize.SM:
        return 'avatar-sm';
      case AvatarSize.LG:
        return 'avatar-lg';
      default:
        return 'avatar-md';
    }
  }

}
