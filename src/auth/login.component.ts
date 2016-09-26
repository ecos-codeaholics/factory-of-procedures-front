import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorHandler } from '../shared/error-handler';
import { AuthService } from './auth.service';

import { Login } from './login';

declare var jQuery: any;

@Component({
    selector: 'login-form',
    templateUrl: 'src/auth/templates/login.component.html',
})

export class LoginComponent {

    title = 'Acceso de usuario';
    user = new Login('', '', NaN, 'citizen');
    error: any;

    status: boolean;
    profile: string;

    constructor(

        private authService: AuthService,
        private router: Router
    ) {

        this.profile = authService.getProfile();
    }

    setAuthStatus(status: boolean) {

        this.authService.setAuthStatus(status)
    }

    doLogin(user: Login) {

        this.authService
            .doLogin(this.user)
            .subscribe(
            (res) => {

                if (!res.json().errorInd) {

                    this.setAuthStatus(res.json());
                }
            },
            error => { },
            () => {

                this.router.navigate(['/']);
            });
    }

    get diagnostic() { return JSON.stringify(this.user); }
}
