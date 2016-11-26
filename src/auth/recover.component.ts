import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { ConfigService } from '../config/config.service';

import { Citizen } from '../citizen/citizen';
import { Login } from './login';

declare var jQuery: any;

@Component({
    selector: 'recover-form',
    templateUrl: 'src/auth/templates/recover.component.html',
})

export class RecoverComponent {

    title = 'Recuperar Constraseña';

    login = new Login("", "", NaN, 'citizen');

    error: any;
    env: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        private config: ConfigService
    ) {

        this.env = config.getEnv();
    }

    submitted = false;

    resetPassword(login: Login) {
        this.authService
            .resetPassword(this.login)
            .subscribe(
            (res) => {
                jQuery('.modal-title').html("Recuperar Contraseña");
                jQuery('.modal-body').html("Una nueva contraseña ha sido enviada a su e-mail registrado.");
                jQuery('.modal').modal('show');
                console.log(res.json());
                this.router.navigate(['home']);
            },
            (error) => {

                this.error = error;
                console.log(this.error);
            });
    }

    get diagnostic() {

        if (this.env === 'development') {
            return JSON.stringify(this.login);
        }
    }
}
