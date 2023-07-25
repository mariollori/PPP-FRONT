import { Component, OnInit } from '@angular/core';

import { GetImgHomeUseCase } from '../../domain/usecase/getImgHomeUseCase';
// import { getImgHomeUseCase } from '../../domain/usecase/getImgHomeUseCase';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  constructor(private getImgHomeUsecase: GetImgHomeUseCase) {}

  ngOnInit(): void {
    this.getImgHome();
  }

  scrollToElement() {
    const element = document.getElementById('step-counts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async getImgHome() {
    const response = await this.getImgHomeUsecase.execute();
    const { data } = response!;

    console.log(data);
  }
}
