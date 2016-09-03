import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorHandler } from '../shared/error-handler';

import { AuthService } from './auth.service';
import { Login } from './login';

 declare var jQuery:any;

@Component({
    selector: 'login-form',
    templateUrl: 'src/auth/templates/login.component.html',
})

export class LoginComponent {

    title = 'Acceso de usuario';

    user = new Login('', '', NaN);

    error: any;



    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    doLogin(user: Login) {

        this.authService
            .doLogin(this.user)
            .subscribe(
            (res) => {
                console.log(res);

                this.router.navigate(['/']);
            },
            error => {
                jQuery('.modal-body').html("UPS, Creo que hay un problema");
                jQuery('.modal').modal('show');
            });
    }

    get diagnostic() { return JSON.stringify(this.user); }
}
