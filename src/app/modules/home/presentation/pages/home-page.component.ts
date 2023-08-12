import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GetImgHomeUseCase } from '../../domain/usecase/getImgHomeUseCase';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  imgCarousel: string[] = [];

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

    const { banner_url } = data[0];

    this.imgCarousel = banner_url;
  }

  isDragging: boolean = false;
  initialScrollX: number = 0;
  dragStartX: number = 0;

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.initialScrollX = this.scrollContainer.nativeElement.scrollLeft;
    this.dragStartX = event.clientX;
  }

  onMouseUp() {
    this.isDragging = false;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const distance = event.clientX - this.dragStartX;
      this.scrollContainer.nativeElement.scrollLeft = this.initialScrollX - distance;
    }
  }
}
