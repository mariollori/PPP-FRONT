import { Component, OnInit } from '@angular/core';
import { CircleAvatarComponent } from '../circle-avatar/circle-avatar.component';
import { CommonModule, NgClass } from '@angular/common';



@Component({
  standalone: true,
  selector: 'userbar-ppp',
  templateUrl: './userbar.html',
  styleUrls: ['./userbar.css'],
  imports: [CircleAvatarComponent, NgClass, CommonModule]


})

export class UserBar implements OnInit {

  validateRol:string='';

  roles:any[] = []

  ngOnInit(): void {
    this.roles = JSON.parse(sessionStorage.getItem('user')!).roles.map((value:any)=> {this.validateRol+='/'+value.name})
  }



  list = [
    { icon: 'home-2', title: 'Home' },
    { icon: 'setting-1', title: 'Admin' },
    { icon: 'clock', title: 'Options' },
    { icon: 'home-2', title: 'Home' },
    { icon: 'setting-1', title: 'Admin' },
    { icon: 'clock', title: 'Options' },
    { icon: 'home-2', title: 'Home' },
    { icon: 'setting-1', title: 'Admin' },
    { icon: 'clock', title: 'Options' },
    { icon: 'home-2', title: 'Home' },
    { icon: 'setting-1', title: 'Admin' },
    { icon: 'clock', title: 'Options' },


  ]
  userbarVisible: boolean = true;
  toogleSidebar() {
    this.userbarVisible = !this.userbarVisible;
  }
}