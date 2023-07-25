import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../Functions/loading.interceptor';
import { LoadingService } from '../components/loading/services/loading.service';
import { HomeRepository } from 'src/app/modules/home/data/repositories/home-repository';
import { HomeService } from 'src/app/modules/home/domain/services/home.service';
import { GetImgHomeUseCase } from 'src/app/modules/home/domain/usecase/getImgHomeUseCase';
// import { MessageService } from 'primeng/api';

export const Providers = [
  LoadingService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },
  {
    provide: HomeRepository,
    useClass: HomeService,
  },
  /* {
    provide: GetImgHomeUseCase
    // useClass: getImgHomeUseCase
  }, */
  GetImgHomeUseCase
];
