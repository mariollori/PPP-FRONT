import { Component, OnInit } from '@angular/core';
import { AuthenticationLoginUseCase } from '../../domain/usecase/authenticationLoginUseCase';
import { Router } from '@angular/router';
import { LoginModelData } from '../../data/models/log-in-model';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  username: string = '';
  password: string = '';

  loginData = new LoginModelData();

  constructor(
    private authenticationLoginUseCase: AuthenticationLoginUseCase,
    private router: Router
  ) {}

  ngOnInit(): void {}

  obtenerInputValue(value: string, typeText: string) {
    if (typeText == 'username') {
      this.username = value;
      console.log("Esto es user: " + this.username);
    } else if (typeText == 'password') {
      this.password = value;
      console.log("Esto es password: " + this.password);
    }
  }

  async login() {
    const data = {
      userName: this.username,
      password: this.password,
    };

    try {
      const response = await this.authenticationLoginUseCase.execute(data);

      sessionStorage.setItem('token', response!.data.token);

      let json = JSON.parse(window.atob(response!.data.token.split('.')[1]));

      this.loginData = response!.data;

      sessionStorage.setItem('user', JSON.stringify(this.loginData));

      console.log(sessionStorage);

      this.router.navigate(['/menu-items']);
    } catch (err) {
      console.log(err);
    }
  }
}
