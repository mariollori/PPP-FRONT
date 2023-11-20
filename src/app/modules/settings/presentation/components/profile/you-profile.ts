import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'you-profile-user',
  templateUrl: './you-profile.html',
  imports: [CommonModule],
})
export class YouProfile implements OnInit {
  userData: any;

  async ngOnInit() {
    this.userData = JSON.parse(sessionStorage.getItem('userbar')!);
    console.log(this.userData);

  }
}
