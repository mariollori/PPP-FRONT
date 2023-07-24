import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../domain/services/home.service';
// import { getImgHomeUseCase } from '../../domain/usecase/getImgHomeUseCase';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  // styleUrls: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  constructor(private homeServide: HomeService) {}

  ngOnInit(): void {
    this.getImgHome()
  }

  scrollToElement() {
    const element = document.getElementById('step-counts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getImgHome() {
    this.homeServide.getAllImagesHomeRepository().subscribe((data) => {
      console.log(data);
    });
  }
}
