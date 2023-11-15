import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthenticationLoginUseCase } from '../../domain/usecase/authenticationLoginUseCase';
import { Router } from '@angular/router';
import { LoginModelData } from '../../data/models/log-in-model';
import { GetAllUserByIdUseCase } from '../../domain/usecase/getUserByIdUseCase';
import { UserModelData } from '../../data/models/user-model';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  username: string = '';
  password: string = '';

  loginData = new LoginModelData();
  userData = new UserModelData();

  toast: boolean = false;
  message: string = '';
  typeToast: string = '';

  constructor(
    private authenticationLoginUseCase: AuthenticationLoginUseCase,
    private getAllUserByIdUseCase: GetAllUserByIdUseCase,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  obtenerInputValue(value: string, typeText: string) {
    if (typeText == 'username') {
      this.username = value;
    } else if (typeText == 'password') {
      this.password = value;
    }
  }

  async login() {
    const data = {
      userName: this.username,
      password: this.password,
    };

    try {
      const response = await this.authenticationLoginUseCase.execute(data);

      const userDataResponse = await this.getAllUserByIdUseCase.execute(
        response!.data.id
      );

      sessionStorage.setItem('token', response!.data.token);

      sessionStorage.setItem('access', JSON.stringify(response!.data.accesses));

      let json = JSON.parse(window.atob(response!.data.token.split('.')[1]));

      this.loginData = response!.data;

      this.userData = userDataResponse!.data;

      console.log(this.userData);

      sessionStorage.setItem('user', JSON.stringify(this.loginData));
      sessionStorage.setItem('userbar', JSON.stringify(this.userData));

      this.message =
        'Oops, error al registrarte. Al parecer no eres acto para iniciar tus practicas.';
      this.typeToast = 'error';
      this.toast = true;
      setTimeout(
        () => (
          (this.toast = false), (this.message = ''), this.cdr.detectChanges()
        ),
        5000
      );

      this.router.navigate(['/menu-items']);
    } catch (err) {
      this.message = 'Hubo un error al intentar iniciar sesión...!!!';
      this.typeToast = 'error';
      this.toast = true;
      setTimeout(
        () => (
          (this.toast = false), (this.message = ''), this.cdr.detectChanges()
        ),
        5000
      );
      console.log(err);
    }
  }
}
