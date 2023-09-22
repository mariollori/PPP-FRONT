import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css'],
  standalone: true,
  imports: [CommonModule],
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
