import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorHandler } from '../shared/error-handler';

import { AuthService } from './auth.service';
import { Login } from './login';

declare var jQuery: any;

@Component({
  selector: 'FunctionaryLogin-form',
  templateUrl: 'src/auth/templates/functionaryLogin.component.html',
})

export class FunctionaryLoginComponent {

  title = 'Acceso de Funcionario';

  user = new Login('', '', NaN, 'functionary');

  error: any;



  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  doFunctionaryLogin(user: Login) {

    this.authService
      .doFunctionaryLogin(this.user)
      .subscribe(
        (res) => {
          console.log(res);

          this.router.navigate(['/']);
        },
        error => {});
  }

  get diagnostic() { return JSON.stringify(this.user); }
}
