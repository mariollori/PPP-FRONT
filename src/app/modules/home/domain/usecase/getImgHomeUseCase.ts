import { Observable } from 'rxjs';
import { HomeService } from '../services/home.service';
import { HomeModel } from '../models/home-models';

export class getImgHomeUseCase {
  constructor(private homeService: HomeService) {}

  execute(): Observable<HomeModel | undefined> {
    try {
      return this.homeService.getAllImagesHomeRepository();
    } catch (error) {
      console.log(error);
      return new Observable<HomeModel | undefined>();
    }
  }
}
