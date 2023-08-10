import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../Functions/loading.interceptor';
import { LoadingService } from '../components/loading/services/loading.service';
import { HomeRepository } from 'src/app/modules/home/data/repositories/home-repository';
import { HomeService } from 'src/app/modules/home/domain/services/home.service';
import { GetImgHomeUseCase } from 'src/app/modules/home/domain/usecase/getImgHomeUseCase';
import { AuthenticationLoginUseCase } from 'src/app/modules/auth/log-in/domain/usecase/authenticationLoginUseCase';
import { authenticationGuard } from 'src/app/config/guard/authentication.guard';
import { TokenInterceptorService } from '../Functions/token-interceptor.service';
import { StudentServiceApi } from 'src/app/modules/list-student/domain/services/student.services';

export const Providers = [
  LoadingService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  {
    provide: HomeRepository,
    useClass: HomeService,
  },
  GetImgHomeUseCase,
  AuthenticationLoginUseCase,
  authenticationGuard,
  StudentServiceApi
];
