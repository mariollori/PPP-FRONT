import {Component} from '@angular/core';
import { AvatarSize } from 'src/app/config/enum/sizes';


@Component({

  selector : 'sidebar-ppp',
  templateUrl: './sidebar.component.html',
  styleUrls:['./sidebar.style.css']

})

export class Sidebar{
       avatar = AvatarSize.XS;
       list = [
        {icon:'H',title:'Home'},
        {icon:'A',title:'Admin'},
        {icon:'O',title:'Options'},
        {icon:'S',title:'Settings'},
        {icon:'H',title:'Home'},
      
       ]
       
}