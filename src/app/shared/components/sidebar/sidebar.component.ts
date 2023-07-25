import {Component} from '@angular/core';



@Component({

  selector : 'sidebar-ppp',
  templateUrl: './sidebar.component.html',
  styleUrls:['./sidebar.style.css']

})

export class Sidebar{
   
       list = [
        {icon:'home-2',title:'Home'},
        {icon:'setting-1',title:'Admin'},
        {icon:'clock',title:'Options'},
        
      
       ]
       
}