import { Observable } from 'rxjs';
import { HomeModel } from '../../domain/models/home-models';

export abstract class HomeRepository {
  abstract getAllImagesHomeRepository(): Observable<HomeModel>;
}
