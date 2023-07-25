import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css'],
})
export class LoadingPageComponent {
  showLoader = false;

  constructor(private loaderService: LoadingService) {}

  ngOnInit(): void {
    this.loaderService.loaderState.subscribe((state: boolean) => {
      this.showLoader = state;
    });
  }
}
