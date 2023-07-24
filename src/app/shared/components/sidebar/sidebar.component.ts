import {Component} from '@angular/core';


@Component({

  selector : 'sidebar-ppp',
  templateUrl: './sidebar.component.html',
  styleUrls:['./sidebar.style.css']

})

export class Sidebar{
       list = [
        {icon:'H',title:'Home'},
        {icon:'A',title:'Admin'},
        {icon:'O',title:'Options'},
        {icon:'S',title:'Settings'}
       ]
}