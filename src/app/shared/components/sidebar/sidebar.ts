import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AccessModel } from 'src/app/modules/auth/log-in/data/models/access-model';



@Component({
  standalone: true,
  selector: 'sidebar-ppp',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  imports: [NgClass, CommonModule, RouterModule]


})

export class Sidebar implements OnInit{

  accesses:AccessModel[]=[];
  sidebarVisible: boolean = true;
  // @Input() accesses!:AccessModel[];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.accesses = JSON.parse(sessionStorage.getItem('access')!) as AccessModel[] || [];
    if(this.accesses.length != 0) this.router.navigate([`${this.accesses[0].path}`]);
  }


  toogleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
