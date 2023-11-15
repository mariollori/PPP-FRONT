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
  imports: [
    CircleAvatarComponent,
    NgClass,
    CommonModule,
    GlobalModel,
    CreateSupervisorPage,
  ],
})
export class UserBar implements OnInit {
  validateRol: string = '';

  isShowModal = false;
  userbarVisible: boolean = true;

  roles: any[] = [];

  user: any;

  userData: any;

  ngOnInit(): void {
    this.roles = JSON.parse(sessionStorage.getItem('user')!).roles;
    this.user = JSON.parse(sessionStorage.getItem('user')!);
    if (this.roles.length == 1) this.validateRol = this.roles[0].name;
    else this.validateRol = this.roles[0].name + ' - ' + this.roles[1].name;

    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);
    console.log(this.userData);

  }

  list = [
    { icon: 'home-2', title: 'Home' },
    { icon: 'setting-1', title: 'Admin' },
    { icon: 'clock', title: 'Options' },
  ];

  toogleSidebar() {
    this.userbarVisible = !this.userbarVisible;
  }

  handleShowModal() {
    this.isShowModal = true;
  }

  handleHiddeModal() {
    this.isShowModal = false;
  }
}
