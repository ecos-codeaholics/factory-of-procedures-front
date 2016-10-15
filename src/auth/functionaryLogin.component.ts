import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorHandler } from '../shared/error-handler';
import { AuthService } from './auth.service';
import { ConfigService } from '../config/config.service';

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
    env: string;

    status: boolean;
    profile: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        private config: ConfigService
    ) {

        this.profile = authService.getProfile();
        this.env = config.getEnv();
    }

    setAuthStatus(status: boolean) {

        this.authService.setAuthStatus(status)
    }

    doFunctionaryLogin(user: Login) {

        this.authService
            .doFunctionaryLogin(this.user)
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

    get diagnostic() {

        if (this.env === 'development') {
            return JSON.stringify(this.user);
        }
    }
}
