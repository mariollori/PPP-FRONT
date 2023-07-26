import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';



@Component({
  standalone: true,
  selector: 'sidebar-ppp',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  imports: [NgClass, CommonModule]


})

export class Sidebar {
  sidebarVisible: boolean = true;
  list = [
    { icon: 'home-2', title: 'Home' },
    { icon: 'setting-1', title: 'Admin' },
    { icon: 'clock', title: 'Options' },


  ]


  toogleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}