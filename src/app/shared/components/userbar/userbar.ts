import { Component, OnInit } from '@angular/core';
import { CircleAvatarComponent } from '../circle-avatar/circle-avatar.component';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalModel } from '../modal/global-modal';
import { CreateSupervisorPage } from 'src/app/modules/supervisor/create-supervisor/pages/create-supervisor.page';

@Component({
  standalone: true,
  selector: 'userbar-ppp',
  templateUrl: './userbar.html',
  styleUrls: ['./userbar.css'],
  imports: [CircleAvatarComponent, NgClass, CommonModule, GlobalModel, CreateSupervisorPage]
})

export class UserBar implements OnInit {

  validateRol:string='';

  roles:any[] = []

  ngOnInit(): void {
    this.roles = JSON.parse(sessionStorage.getItem('user')!).roles.map((value:any)=> {this.validateRol+='/'+value.name})
  }

  isShowModal = false



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
  
  handleShowModal() {
    this.isShowModal = true
  }

}