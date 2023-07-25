import { Observable } from 'rxjs';
import { HomeModel } from '../../data/models/home-models';

export abstract class HomeRepository {
  abstract getAllImagesHomeRepository(): Observable<HomeModel>;
}
