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

    //@Input() user: User;

    title = 'Recuperar Constraseña';

    login = new Login("", "", "");

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
            error => {
                console.log("ERROR:", error.text());
            });
    }

    get diagnostic() { return JSON.stringify(this.login); }
}

