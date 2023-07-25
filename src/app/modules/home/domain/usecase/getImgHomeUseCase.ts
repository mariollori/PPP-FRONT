import { lastValueFrom } from 'rxjs';
import { HomeService } from '../services/home.service';
import { HomeModel } from '../../data/models/home-models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetImgHomeUseCase {
  constructor(private homeService: HomeService) {}

  execute(): Promise<HomeModel | undefined> {
    const response = lastValueFrom(
      this.homeService.getAllImagesHomeRepository()
    );

    return response;
  }
}
