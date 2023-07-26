import {Component} from '@angular/core';
import { CircleAvatarComponent } from '../circle-avatar/circle-avatar.component';
import { CommonModule, NgClass } from '@angular/common';



@Component({
  standalone:true,
  selector : 'userbar-ppp',
  templateUrl: './userbar.html',
  styleUrls:['./userbar.css'],
  imports:[CircleAvatarComponent, NgClass,CommonModule]


})

export class UserBar{
   
       list = [
        {icon:'home-2',title:'Home'},
        {icon:'setting-1',title:'Admin'},
        {icon:'clock',title:'Options'},
        
      
       ]
       userbarVisible: boolean = true;
       toogleSidebar() {
          this.userbarVisible = !this.userbarVisible;
        }
}