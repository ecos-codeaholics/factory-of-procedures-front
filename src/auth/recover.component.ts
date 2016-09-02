import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

import { Citizen } from '../citizen/citizen';
import { Login } from './login';

@Component({
    selector: 'recover-form',
    templateUrl: 'src/auth/templates/recover.component.html',
})

export class RecoverComponent {

    title = 'Recuperar Constraseña';

    login = new Login("", "", NaN);

    error: any;

    constructor(private authService: AuthService, private router: Router) { }

    submitted = false;

    resetPassword(login: Login) {
        this.authService
            .resetPassword(this.login)
            .subscribe(
            (res) => {
                console.log(res.json());
                this.router.navigate(['login']);
            },
            (error) => {

                this.error = error;
                console.log(this.error);
            });
    }

    get diagnostic() { return JSON.stringify(this.login); }
}
